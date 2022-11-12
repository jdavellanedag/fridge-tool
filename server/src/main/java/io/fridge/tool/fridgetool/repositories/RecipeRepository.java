package io.fridge.tool.fridgetool.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import io.fridge.tool.fridgetool.domain.Recipe;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {

}
