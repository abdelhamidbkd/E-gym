package com.example.gym.Rep;

import com.example.gym.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface ArticleRepository extends JpaRepository<Article, Long>, JpaSpecificationExecutor<Article> {

    Article findArticleByarticleId(long id);

    Article findArticleBytitle(String title);

    List<Article> findArticleBycoachId(long id);

    List<Article> findArticleByarticleType(String type);
}