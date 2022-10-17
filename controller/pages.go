package controller

import (
	g "github.com/gin-gonic/gin"
)

func IndexPage(c *g.Context) {
	c.HTML(200, "index.html", g.H{
		"title": "Assignment 3",
	})
}
