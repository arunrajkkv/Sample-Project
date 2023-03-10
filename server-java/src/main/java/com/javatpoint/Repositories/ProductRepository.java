package com.javatpoint.Repositories;

import org.springframework.data.repository.CrudRepository;

import com.javatpoint.Pojos.Product;

public interface ProductRepository extends CrudRepository<Product, Integer> {

}
