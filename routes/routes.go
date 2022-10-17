package routes

import (
	g "github.com/gin-gonic/gin"
	c "hacktiv-assignment-3/controller"
	m "hacktiv-assignment-3/middleware"
)

func init() {
	r := g.Default()
	r.Use(m.UpdateWaterAndWind())
	r.Static("/public", "./public")
	r.LoadHTMLGlob("public/*")
	r.GET("/", c.IndexPage)
	r.GET("/status", c.GetStatus)
	r.Run()
}
