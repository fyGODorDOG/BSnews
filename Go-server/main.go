package main

import (
	"net/http"
)

func Display(writer http.ResponseWriter, request *http.Request){

}

func main(){
	http.HandleFunc("/", Display)

	http.ListenAndServe(":9000", nil)
}
