
let browser = "Chrome"
function browserType() {

    if (browser === "Chrome") {
        console.log("This is a Chrome Browser")
    }

    else
        console.log("This is not a Chrome Browser")

}

function runTests() {

    let testTypes = "Sanity"
    switch (testTypes) {
        case "Sanity":
            console.log("This is Sanity test type")
            break

        case "Regression":
            console.log("This is Regression test type")
            break
        case "Smoke":
            console.log("This is Smoke test type")
            break
        default:
            console.log("No test type found")
            break

    }


}

browserType()
runTests()