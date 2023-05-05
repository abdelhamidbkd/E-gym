package com.example.gym.Services;


import com.example.gym.Rep.*;
import com.example.gym.model.*;


import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {
    private final ArticleRepository articlerep;

    public ArticleService(ArticleRepository articlerep) {
        this.articlerep = articlerep;
    }

    public List<Article> getAllarticles(){

        return articlerep.findAll();
    }

    public Article findArticleById(long id){
        return articlerep.findArticleByarticleId(id);
    }

    public boolean createArticle(Article article){
        List<Article> articles = articlerep.findAll();
        for (Article other : articles) {
            if (other.getTitle().toString().equals(article.getTitle().toString())) {
                return false;
            }
        }
        articlerep.save(article);
        return true;
    }

    public boolean updateArticle(Article article){
        List<Article> articles = articlerep.findAll();
        for (Article other : articles) {
            if (other.getTitle().toString().equals(article.getTitle().toString())) {
                if (!other.getArticleId().equals(article.getArticleId())) {
                    return false;
                }
            }
        }
        articlerep.save(article);
        return true;
    }

    public Article findArticleByTitle(String title){
        return articlerep.findArticleBytitle(title);
    }

    public List<Article> findArticleByType(String type){
        return articlerep.findArticleByarticleType(type);
    }

    public  List<Article> findArticleByCoach(long id){
        return articlerep.findArticleBycoachId(id);
    }
    public  void deleteArticleByArticle(Article article){  articlerep.delete(article);}









}
