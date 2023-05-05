package com.example.gym.controller;


import com.example.gym.Services.*;
import com.example.gym.model.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/Article")
public class ArticleController {
    private final ArticleService articleservice;

    @Autowired
    public ArticleController(ArticleService articleservice) {
        this.articleservice = articleservice;
    }

    @GetMapping("")
    public List<Article> Allarticles(){
        return articleservice.getAllarticles();
    }

    @PostMapping("/add")
    public boolean newArticle(@RequestBody Article article) {
        return articleservice.createArticle(article);
    }

    @PutMapping("/update")
    public boolean editArticle(@RequestBody Article article) {

        return articleservice.updateArticle(article);
    }

    @GetMapping("/{articleId}")
    public Article ArticleById(@PathVariable long articleId){
        return articleservice.findArticleById(articleId);
    }
    @GetMapping("/title/{title}")
    public Article  ArticleByTitle(@PathVariable String title){
        return articleservice.findArticleByTitle(title);
    }

    @GetMapping("/type/{type}")
    public List<Article>  ArticleByType(@PathVariable String type){
        return articleservice.findArticleByType(type);
    }


    @GetMapping("/coachId/{id}")
    public  List<Article>  ArticleByCoachId(@PathVariable long id){
        return articleservice.findArticleByCoach(id);
    }

    @DeleteMapping("/delete/{articleId}")
    public void deleteByArticle(@PathVariable long articleId){

        articleservice.deleteArticleByArticle(articleservice.findArticleById(articleId));
    }



}
