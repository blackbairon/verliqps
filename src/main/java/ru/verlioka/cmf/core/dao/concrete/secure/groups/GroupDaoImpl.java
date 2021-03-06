package ru.verlioka.cmf.core.dao.concrete.secure.groups;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;
import ru.verlioka.cmf.core.dao.generic.GenericDaoImpl;
import ru.verlioka.cmf.core.models.db.security.EntityGroup;


@Repository("userGroupsDaoImpl")
public class GroupDaoImpl extends GenericDaoImpl<EntityGroup, Integer>
								implements IGroupDao{

}
