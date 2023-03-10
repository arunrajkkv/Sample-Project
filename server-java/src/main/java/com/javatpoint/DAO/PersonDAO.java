package com.javatpoint.DAO;

import org.springframework.stereotype.Service;

import com.javatpoint.Pojos.Person;

@Service
public interface PersonDAO {
	public void savePersonDetails(String firstName, String lastName);
	public Person getPersonDetail();
}
