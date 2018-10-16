package main

import (
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"strings"
)

func LoginPage(writer http.ResponseWriter, request *http.Request) {
	var realPath string = "Web"
	var resourcePath string = request.URL.Path
	var path string

	if resourcePath == "/" {
		path = realPath + "/index.html"
	} else {
		var resourceType string = resourcePath[strings.LastIndex(resourcePath, "."):]

		switch resourceType {
		case ".css":
			writer.Header().Set("Content-type", "text/css")
		case ".js":
			writer.Header().Set("Content-type", "text/javascript")
		}
		path = realPath + resourcePath
	}

	fin, err := os.Open(path)
	defer fin.Close()
	if err != nil {
		//log.Fatal("Static resource error")
		fmt.Println(path)
		return
	}

	content, _ := ioutil.ReadAll(fin)
	writer.Write(content)
}

func main() {
	http.HandleFunc("/", LoginPage)

	http.ListenAndServe(":9000", nil)
}
