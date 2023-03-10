package com.javatpoint.Repositories;

import org.springframework.data.repository.CrudRepository;

import com.javatpoint.Pojos.Person;

public interface PersonRepository extends CrudRepository<Person, Integer> {

}
