import { milestones } from "./milestones.js";
import { stories } from "./stories.js";
import { methods } from "./methods.js";
import { teammates } from "./team.js";

function addMilestones () {
    for (let milestone of milestones) {
        $('#block_milestones').append(`
            <div class="col-12 d-flex flex-row my-3">
                <div class="d-none d-lg-block col-lg-2 border border-info text-center">
                    <p class="mt-5">IMAGE<br>OU<br>CSS<br>ICI</p>
                </div>
                <div class="col-12 col-lg-9 text-center">
                    <p class="h2 text-danger">${milestone.date}</p>
                    <p class="h3">${milestone.title}</p>
                    <p>${milestone.description}</p>
                </div>
            </div>
        `)
    }
}
                    
function addStories () {
    for (let story of stories) {
        $('#block_stories').append(`
            <div class="col-12 col-lg-10 offset-lg-1 text-center my-3">
                <p class="h2 story_date">${story.date}</p>
                <p class="h3 mt-5">${story.title}</p>
                <p>${story.description}</p>
            </div>
        `)
    }
}

function addMethods () {
    for (let method of methods) {
        $('#block_methods').append(`
            <div class="col-12 col-lg-10 offset-lg-1 text-center my-3">
                <p class="h3">${method.title}</p>
                <p>${method.description}</p>
            </div>
        `)
    }
}

function addTeamMates () {
    for (let teammate of teammates) {
        $('#block_team_individual').append(`
            <div class="col-12 col-lg-10 offset-lg-1 d-flex flex-column flex-lg-row my-3">
                <div class="col-12 col-lg-2">
                    <img src="${teammate.src}" class="w-100 d-block mt-5">
                </div>
                <div class="col-12 col-lg-8 text-center">
                    <p class="h2">${teammate.name}</p>
                    <p class="h3">${teammate.job}</p>
                    <p>${teammate.description}</p>
                </div>
            </div>
        `)
    }
}


addMilestones();
addStories();
addMethods();
addTeamMates();