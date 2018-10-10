package main

import(
	"fmt"
	"net/http"
)

func Display(writer http.ResponseWriter, request *http.Request){
	fmt.Fprintf(writer, "hello go")
}

func main(){
	http.HandleFunc("/", Display)

	http.ListenAndServe(":9000", nil)
}
