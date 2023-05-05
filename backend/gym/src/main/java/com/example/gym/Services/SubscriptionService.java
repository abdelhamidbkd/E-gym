package com.example.gym.Services;

import com.example.gym.Rep.*;
import com.example.gym.model.*;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SubscriptionService {
    private final SubscriptionRepository Subscriptionrep;

    public SubscriptionService(SubscriptionRepository Subscriptionrep) {
        this.Subscriptionrep = Subscriptionrep;
    }

    public List<Subscription> getAllSubscriptions() {
        return Subscriptionrep.findAll();
    }

    public Subscription findSubscriptionById(long id) {
        return Subscriptionrep.findSubscriptionBysubscriptionId(id);
    }

    public boolean createSubscription(Subscription Subscription) {
        List<Subscription> Subscriptions = Subscriptionrep.findAll();
        for (Subscription other : Subscriptions) {
            if (other.getNameSub().toString().equals(Subscription.getNameSub().toString())) {
                return false;
            }
        }
        Subscriptionrep.save(Subscription);
        return true;
    }

    public boolean updateSubscription(Subscription Subscription) {
        List<Subscription> Subscriptions = Subscriptionrep.findAll();
        for (Subscription other : Subscriptions) {
            if (other.getNameSub().toString().equals(Subscription.getNameSub().toString())) {
                if (!other.getSubscriptionId().equals(Subscription.getSubscriptionId())) {
                    return false;
                }
            }
        }
        Subscriptionrep.save(Subscription);
        return true;
    }

    public Subscription findSubscriptionByname(String name) {
        return Subscriptionrep.findSubscriptionBynameSub(name);
    }

    public void deleteSubscriptionBySubscription(Subscription Subscription) {
        Subscriptionrep.delete(Subscription);
    }
}
