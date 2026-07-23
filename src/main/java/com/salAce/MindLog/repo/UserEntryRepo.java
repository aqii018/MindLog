package com.salAce.MindLog.repo;
import com.salAce.MindLog.entity.User;
import com.salAce.MindLog.entity.UserDetailsVisibleToAdmin;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;


public interface UserEntryRepo extends MongoRepository<User , ObjectId>{

    User findByUserName (String userName) ;

    @Query(value = "{}", fields = "{ 'userName' : 1, 'email' : 1, 'sentimentAnalysis' : 1, 'roles' : 1 }")
    List<UserDetailsVisibleToAdmin> findUserDetailsVisibleToAdmin();


}
