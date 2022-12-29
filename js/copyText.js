export const copyText = async (text) => {
    await navigator.permissions.query({name: "clipboard-write"}).then(async (result) => {
        if (result.state === "granted" || result.state === "prompt") {
            await navigator.clipboard.writeText(text).then(() => {
                console.log("copy sucess!!!")
            }).catch((error) => {
                console.error(error)
            })
        }
      });
};