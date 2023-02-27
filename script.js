$(document).ready(function () {
    $("#transcript-button").on("click", function(){
        document.getElementById("reuseable-modal").classList.toggle("hide");
    });
    $("#modal-close").on("click", function(){
        document.getElementById("reuseable-modal").classList.toggle("hide");
    })
});


window.onload = async function () {

    const goal = new URL('https://api.github.com/users/brandontcozart/repos');
    const response = await fetch(goal);
    const data = await response.json();


    for (let i = data.length-1; i >= 0; i--) {
        let newrow = $(`
    <tr id="row" onclick="window.open('${data[i].html_url}');">
        <td>
        ${data[i].name}
        </td>

        <td>
        ${data[i].description ? data[i].description : "Dungeons and Dragons dungeon master Application"}
        </td>

        <td> 
        ${data[i].language ? data[i].language : "Java"}
        </td>

        <td> 
        ${new Date(data[i].created_at).toISOString().split('T')[0]}
        </td>
    </tr>
    `)

        $("#table-body").append(newrow);
    }

}