import React, { useEffect, useState } from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import axios from "axios";

type BrandCardsProps = {
  items: any[];
  onBrandSelect: (brandName: string) => void;
}

export default function BrandCards({items, onBrandSelect}: BrandCardsProps) {
  const [brandLogos, setBrandLogos] = useState({});

  useEffect(() => {
   const fetchLogos = async () => {
      try {
        const logoPromises = items.map(async (item) => {
          try {
            const response = await axios.get(`https://api.brandfetch.io/v2/search/${item.name}`);
            if (response.data[0] && response.data[0].icon) {
              return { brandName: item.name, logoUrl: response.data[0].icon };
            }
          } catch (error) {
            console.error("Erro ao buscar logo para", item.name, ":", error);
            return null;
          }
        });

        const logos = await Promise.all(logoPromises);
        const logosMap = logos.reduce((acc, logo) => {
          if (logo) {
            acc[logo.brandName] = logo.logoUrl;
          }
          return acc;
        }, {});

        setBrandLogos(logosMap);
      } catch (error) {
        console.error("Erro ao buscar logos:", error);
      }
   };

 fetchLogos();
}, [items]);

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-5">
      {items.map((item: any, index: number) => (
        <Card shadow="sm" key={index} isPressable onPress={() => onBrandSelect(item.code)}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.name}
              className="object-fill"
              src={brandLogos[item.name]}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.name}</b>
            <p className="text-default-500">{item.code}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

