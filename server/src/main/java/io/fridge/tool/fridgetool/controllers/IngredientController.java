package io.fridge.tool.fridgetool.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.fridge.tool.fridgetool.domain.Ingredient;
import io.fridge.tool.fridgetool.services.IngredientService;

@RestController
@RequestMapping("ingredient")
public class IngredientController {

  public IngredientService service;

  public IngredientController(IngredientService service) {
    this.service = service;
  }

  @GetMapping
  public List<Ingredient> all() {
    return service.findAll();
  }

}
