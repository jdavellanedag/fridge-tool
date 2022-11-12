package io.fridge.tool.fridgetool.services;

import java.util.List;

import org.springframework.stereotype.Service;

import io.fridge.tool.fridgetool.domain.Recipe;
import io.fridge.tool.fridgetool.repositories.RecipeRepository;

@Service
public class RecipeService {

  RecipeRepository repository;

  public RecipeService(RecipeRepository repository) {
    this.repository = repository;
  }

  public List<Recipe> findAll() {
    return repository.findAll();
  }

}
