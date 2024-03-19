import React from "react"
import countries from "../data/data"
import Layout from "./Layout"
import Main from "./Main"


function Home() {
    //const countriesSlice = countries.slice(0, 16)
    //const [country]=countriesSlice
    //console.log(country)
    return (
        <>
            <Layout>
                <Main/>
            </Layout>
        </>
    )
}

export default Home 