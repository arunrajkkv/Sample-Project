package com.javatpoint.DAO;

import javax.persistence.EntityManager;
import javax.persistence.Query;
import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.javatpoint.Pojos.Person;

@Transactional
@Service(value="personDao")
public class PersonDaoImpl implements PersonDAO {
	
	@Autowired
	private EntityManager entityManager;

	@Override
	public void savePersonDetails(String firstName, String lastName) {
		Query query = entityManager.createNativeQuery("INSERT INTO person (first_name, last_name) VALUES (?, ?)");
		query.setParameter(1, firstName);
		query.setParameter(2, lastName);
		query.executeUpdate();
	}
	
	@Override
	public Person getPersonDetail() {
		Query query = entityManager.createQuery("FROM Person WHERE personId = :personID");
		query.setParameter("personID", 1);
		return (Person)query.getSingleResult();
	}

}
