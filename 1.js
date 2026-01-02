

async function github() {
    const response=await fetch("https://api.github.com/users");
    const data=await response.json();
    return data;
}

const first=document.getElementById('first');

async function showUser(){
    try{
        const data=await github();
        if(!data.ok){
            throw new Error("Data is not Available")
        }
        for(let x of data){
            const container=document.createElement('div');
            container.classList.add("user");
            const image=document.createElement('img');
            const user_name=document.createElement('h2');
            const github_link=document.createElement('a');
            image.src=x.avatar_url;
            image.alt="dp";
            image.width=80
            user_name.textContent=x.login;
            github_link.href=x.html_url;
            github_link.textContent="github_link";
            github_link.target="_blank"
            container.append(image);
            container.append(user_name);
            container.append(github_link);
            first.append(container);
    }
    }catch(err){
        console.log(err);
    }
}
showUser()
