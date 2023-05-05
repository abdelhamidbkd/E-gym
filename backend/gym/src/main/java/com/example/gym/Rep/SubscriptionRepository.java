package com.example.gym.Rep;

import com.example.gym.model.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SubscriptionRepository extends JpaRepository<Subscription, Long>, JpaSpecificationExecutor<Subscription> {

    Subscription findSubscriptionBysubscriptionId(long id);

    Subscription findSubscriptionBynameSub(String name);
}