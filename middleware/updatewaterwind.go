package middleware

import (
	"fmt"
	g "github.com/gin-gonic/gin"
	e "hacktiv-assignment-3/entity"
	j "encoding/json"
	o "os"
	r "math/rand"
	t "time"
)

func init() {
	r.Seed(t.Now().UTC().UnixNano())
}

func UpdateWaterAndWind() g.HandlerFunc {
	return func(c *g.Context) {
		f, _ := o.OpenFile("data.json", o.O_WRONLY | o.O_TRUNC, 0644)
		defer f.Close()
		x := r.Intn(100)
		y := r.Intn(100)
		s := e.Status{}
		if x != 0 {
			s.Water = x
		}
		if y != 0 {
			s.Wind = y
		}
		js, _ := j.Marshal(&s)
		fmt.Fprintf(f, `{"status":%s}`, string(js))
		c.Next()
	}
}
