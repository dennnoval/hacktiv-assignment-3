package controller

import (
	g "github.com/gin-gonic/gin"
	o "os"
	b "bufio"
	j "encoding/json"
	e "hacktiv-assignment-3/entity"
)

func GetStatus(c *g.Context) {
	f, _ := o.Open("data.json")
	defer f.Close()
	d := ""
	sc := b.NewScanner(f);
	for sc.Scan() {
		d = sc.Text()
	}
	st := e.Status{}
	j.Unmarshal([]byte(d[len(`{"status":`):len(d)-1]), &st)
	c.JSON(200, g.H{"status": st})
}
