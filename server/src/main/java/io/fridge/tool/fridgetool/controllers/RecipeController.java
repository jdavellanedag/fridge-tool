package io.fridge.tool.fridgetool.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.fridge.tool.fridgetool.domain.Recipe;
import io.fridge.tool.fridgetool.services.RecipeService;

@CrossOrigin
@RestController
@RequestMapping("recipe")
public class RecipeController {

  public RecipeService service;

  public RecipeController(RecipeService service) {
    this.service = service;
  }

  @GetMapping
  public ResponseEntity<List<Recipe>> all() {
    return new ResponseEntity<>(service.findAll(), HttpStatus.OK);
  }

}
