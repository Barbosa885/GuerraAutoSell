"use client"
import React, { useState, useEffect } from "react";
import { BrandCards, Btn, Nav, SelectInput } from "../../components";
import { api } from "../../services/api";
import { Toaster, toast } from 'alert';

interface Brand {
  code: number;
  name: string;
}

interface Model {
  id: string;
  name: string;
}

interface Year {
  id: string;
  name: string;
}

export default function Explore() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [models, setModels] = useState<Model[]>([]);
  const [years, setYears] = useState<Year[]>([]);
  const [selectedBrand, setSelectedBrand] = useState(0);
  const [selectedModel, setSelectedModel] = useState(0);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await api.get("/cars/brands");
        const data = response.data;
        setBrands(data);
      } catch (error) {
        toast.error('Erro ao buscar marcas.')
        console.error(error);
      }
    };
    fetchBrands(); // Chamada da função ao carregar a página
  }, []);

  const handleSelectBrand = async (brandId: number) => {
   setSelectedBrand(brandId);

   try {
      const response = await api.get(`/cars/brands/${brandId}/models`);
      const data = response.data;
      setModels(data);
   } catch (error) {
      toast.error('Erro ao buscar modelos.');
      console.error(error);
   }
  };

  const handleSelectModel = async (modelId: number) => {
    setSelectedModel(modelId);

     try {
        const response = await api.get(`/cars/brands/${selectedBrand}/models/${modelId}/years`);
        const data = response.data;
        setYears(data);
     } catch (error) {
        toast.error('Erro ao buscar anos.');
        console.error(error);
     }
  };

  const clearSelection = () => {
    if (selectedModel) setSelectedModel(0);
    if (selectedBrand) setSelectedBrand(0);
  };

  return (
  <>
    <Nav />
    <div className="flex flex-col mt-24 items-center justify-center space-y-6">
    {selectedBrand === 0 ? (
      <>
      <h1 className="text-4xl font-bold">Selecione uma marca</h1>
      <Toaster position="bottom-center"/>
      <BrandCards items={brands} onBrandSelect={handleSelectBrand}/>
      </>
      ) : (
      selectedModel === 0 ? (
      <>
          <h1 className="text-4xl font-bold">Selecione um modelo</h1>
          <SelectInput
            label="Modelos"
            placeholder="Selecione um modelo"
            options={models.map(model => ({ value: model.id, label: model.name }))}
            onChange={(e: any) => handleSelectModel(e.target.value)}
          />
          <Btn onClick={clearSelection} text="escolher outra marca" />
      </>
      ) : (
      <>
        <h1 className="text-4xl font-bold">Selecione o ano</h1>
        <SelectInput
          label="Anos"
          placeholder="Selecione um ano"
          options={years.map(year => ({ value: year.id, label: year.name }))}
          onChange={(e) => console.log("Ano selecionado:", e.target.value)}
        />
        <Btn onClick={clearSelection} text="escolher outro modelo" />
      </>
      )
      )}
    </div>
    </>
  );

}

