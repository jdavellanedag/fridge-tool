package io.fridge.tool.fridgetool.services;

import java.util.List;

import org.springframework.stereotype.Service;

import io.fridge.tool.fridgetool.domain.Ingredient;
import io.fridge.tool.fridgetool.repositories.IngredientRepository;

@Service
public class IngredientService {

  IngredientRepository repository;

  public IngredientService(IngredientRepository repository) {
    this.repository = repository;
  }

  public List<Ingredient> findAll() {
    return repository.findAll();
  }

}
