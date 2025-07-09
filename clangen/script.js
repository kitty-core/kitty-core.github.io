let patrols = [];
const allTags = new Set(["new_cat", "other_clan", "pos_fail", "disrespect", "distrust", "patrol_rel", "halloween", "romantic", "rom_two_apps", "jealous", "app_only", "clan_to_pl", "non-lethal", "platonic", "respect", "trust", "dislike", "comfort", "no_go", "secret_romance", "border_blood"]);
const allPatrolArt = new Set(["gen_bord_dog", "gen_coyote_danger1", "gen_coyote_hostile", "bord_general_intro", "gen_bord_rescue", "gen_train_talkingWW", "gen_bord_twocat_hostile_warrior_warrior", "kittybat_INTRO", "scarecrow_INTRO", "gen_hunt_mouse", "gen_hunt_rat", "gen_hunt_hare", "gen_hunt_bird", "gen_hunt_squirrel", "gen_hunt_fish", "gen_hunt_strangerabbit", "gen_hunt_rabbit", "gen_hunt_vision", "gen_hunt_sneakprey", "hunt_general_intro", "gen_hunt_leafbaresnowstorm", "kittylion_INTRO", "jumpscare_INTRO", "scaryghost_intro", "gen_train_talkingMM", "gen_med_sunny", "gen_med_vision", "med_cat_looking_up", "gen_med_ghost_star", "running_warrior_med", "running_two_meds", "running_med_warrior", "gen_med_and_app", "gen_med_warappmedapp_herbcontest", "gen_med_medwarrior_siblings", "gen_med_medwarriorapp_curiosity", "gen_med_discussion", "deathsheadmoth_INTRO", "gen_med_pumpkinpatch1", "gen_med_pumpkinpatch2", "friendlyghost_INTRO", "train_general_intro", "gen_train_sunny", "gen_train_argue", "gen_train_vision4", "gen_train_ghost", "gen_train_teamwork5", "gen_train_huntingromance1", "gen_train_speakingromance1", "gen_train_teachingromance", "gen_train_starclanromance1", "gen_bord_story", "gen_train_huntingskill", "gen_train_fightingskill", "fst_hunt_fun1", "gen_border_dogscent_clanmember", "gen_bord_chase", "gen_coyote_danger2_w1", "gen_angry_cat_warrior", "gen_coyote_danger2_w2", "gen_coyote_danger2_w3", "gen_cat_with_kits_warrior", "gen_angry_cat_other_clan", "gen_otherclan_ambush", "gen_bord_otherclan_allies", "gen_bord_newcatthunderpath", "gen_bord_patrolwoundedlonerrescue", "gen_gen_newcat_hostile", "gen_bord_twocat_hostile_loner_loner", "gen_battle_warrior_loner", "gen_happy_cat3", "gen_speaking_cat_w3", "gen_speaking_cat_w2", "gen_dead_cat", "gen_warrior_infighting", "running_app2", "kittylion_OUTCOME", "gen_train_argueAA", "gen_bord_twocat_hostile_app_warrior", "gen_battle_app_app", "gen_battle_app_other_clan", "gen_med_gatheringcatmint_greenleaf1", "gen_med_cat_cobwebs_success", "gen_med_cat_cobwebs_fail", "gen_train_talkingMA", "gen_angry_cat_med", "gen_angry_cat_app", "gen_cat_looking_up1", "gen_train_talkingMW", "gen_med_rainygathering", "gen_herbs_all_apps", "gen_train_playbite_2apps", "gen_train_patrolapprenticesessionfail", "gen_train_argueWA", "gen_app_siblings", "running_two_apps", "gen_med_gatheringmoss", "gen_med_romanticstroll_v1", "gen_romanticstroll_med", "gen_med_collectingmullein", "fst_med_herblocation2", "gen_speaking_cat_app", "gen_train_sunny4", "gen_train_sunny6", "gen_warrior_app_meadow", "gen_bord_otherclan_app_allies", "gen_happy_cat2"]);
const allRelValues = new Set(["platonic", "respect", "comfort", "trust", "jealous", "dislike", "romantic", "admiration"]);
const allInjuries = new Set(["bruises", "shock", "non_lethal", "poisoned", "carrionplace disease", "diarrhea", "sprain", "torn ear", "scrapes", "torn pelt", "cat bite", "claw-wound", "battle_injury", "minor_injury", "big_bite_injury", "small_bite_injury", "running nose", "broken back", "grief stricken", "lasting grief", "cold_injury", "sickness", "whitecough", "greencough"]);
const allScars = new Set(["RIGHTEAR", "LEFTEAR", "CHEEK", "TAILBASE", "BRIGHTHEART", "LEGBITE", "ONE", "THREE", "NECKBITE", "SNOUT", "FACE", "CATBITETWO", "SCRATCHSIDE", "BRIDGE", "FROSTFACE", "FROSTTAIL", "FROSTMITT", "FROSTSOCK", "THROAT"]);
const allStatTraits = new Set(["compassionate", "faithful", "loving", "responsible", "thoughtful", "wise", "childish", "playful", "charismatic", "ambitious", "bold", "daring", "strict", "confident", "adventurous", "competitive", "nervous", "insecure", "shameless", "oblivious", "troublesome", "lonesome", "bloodthirsty", "cold", "gloomy", "arrogant", "grumpy", "cunning", "calm", "sneaky", "sincere", "careful", "fierce", "righteous", "vengeful", "rebellious", "strange", "flamboyant"]);
const allThoughts = new Set([]);
const allStatSkills = new Set(["CLEVER,1", "INSIGHTFUL,1", "SENSE,1", "HEALER,1", "CLEVER,2", "SENSE,2", "DREAM,1", "STAR,2", "FIGHTER,3", "RUNNER,3", "HUNTER,2", "LORE,1", "STAR,1", "CLAIRVOYANT,2", "HUNTER,1", "SWIMMER,1", "ROGUE,0", "LONER,0", "TEACHER,0", "FIGHTER,0", "RUNNER,0", "CLIMBER,0", "SWIMMER,0", "DARK,1", "GHOST,1", "SPEAKER,1", "MEDIATOR,1", "PROPHET,2", "OMEN,3", "STORY,2", "STORY,1", "LORE,2", "OMEN,2", "TEACHER,2", "SPEAKER,2", "INSIGHTFUL,3", "HEALER,0", "OMEN,1", "DREAM,3", "CLAIRVOYANT,1", "PROPHET,1", "HEALER,1", "DARK,2"]);
const allMinMaxStatuses = new Set(["apprentice", "medicine cat", "healer cats", "normal adult", "all apprentices", "medicine cat apprentice", "warrior", "leader", "deputy", "kit", "elder", "mediator", "loner", "kittypet", "rogue"]);
const allNewCatProps = new Set(["kittypet", "backstory:kittypet4", "status:warrior", "age:young adult", "backstory:rogue1", "dead", "meeting", "rogue", "age:senior", "age:mate", "backstory:otherclan2", "mate:p_l", "clancat", "exists", "status:kit", "backstory:kittypet1"]);
const allNewCatBackstories = new Set(["kittypet4", "rogue1", "otherclan2", "kittypet1"]);
const allHerbs = new Set(["random_herbs", "many_herbs", "daisy", "cobwebs", "tansy", "rosemary", "catmint", "mullein", "raspberry", "poppy_seeds"]);
const allPrey = new Set(['very_small', 'small', 'medium', 'large', 'huge']);
const allRelationshipConstraints = new Set(["dislike_20", "siblings", "platonic_20", "parent/child", "dislike_10", "romantic_10", "not_mates", "dislike_30", "romantic_30", "dislike_40", "romantic_40", "platonic_50", "mates", "mates_with_pl", "dislike_60"]);
const allPlSkillConstraints = new Set(["OMEN,3", "TEACHER,1", "INSIGHTFUL,1", "KIT,1", "CAMP,1", "STORY,1", "LORE,1", "SPEAKER,1", "FIGHTER,1", "CLEVER,1", "HUNTER,1", "SENSE,1", "RUNNER,1", "SWIMMER,1", "CLIMBER,1", "STAR,1", "GHOST,1", "DARK,1", "DREAM,3", "CLAIRVOYANT,1", "PROPHET,1", "HEALER,1"]);
const allCanHaveStatTargets = new Set(["p_l", "r_c", "not_pl_rc", "any", "adult", "app", "healer", "app1", "app2"]);
const allFutureEventTypes = new Set(["death", "injury", "new_cat", "misc"]);

let currentPatrolId = null;
let isNewPatrol = false;

const BIOME_OPTIONS = ['any', 'forest', 'mountain', 'plains', 'beach', 'wetlands'];
const SEASON_OPTIONS = ['any', 'newleaf', 'greenleaf', 'leaf-fall', 'leafbare'];
const PATROL_TYPES = ['border', 'hunting', 'training', 'medicine'];

const CAT_TARGETS_FOR_DROPDOWN = [
    { value: 'p_l', label: 'p_l - Patrol Leader' },
    { value: 'r_c', label: 'r_c - Random Cat' },
    { value: 's_c', label: 's_c - Special Cat' },
    { value: 'app1', label: 'app1 - Apprentice 1' },
    { value: 'app2', label: 'app2 - Apprentice 2' },
    { value: 'n_c:0', label: 'n_c:0 - New Cat 1' },
    { value: 'n_c:1', label: 'n_c:1 - New Cat 2' },
    { value: 'n_c:2', label: 'n_c:2 - New Cat 3' },
    { value: 'clan', label: 'clan - The Whole Clan' },
    { value: 'patrol', label: 'patrol - The whole patrol' },
    { value: 'multi', label: 'multi - Multiple random cats' },
    { value: '{CAT_COUNT}', label: '{CAT_COUNT} - Cat Count' },
];

const TEXT_TAGS = [
    { value: 'p_l', label: 'p_l', description: 'The cat leading the current patrol.' },
    { value: 'r_c', label: 'r_c', description: 'A randomly selected cat from the patrol.' },
    { value: 's_c', label: 's_c', description: 'A cat chosen for a stat/skill requirement.' },
    { value: 'app1', label: 'app1', description: 'The first apprentice on the patrol.' },
    { value: 'app2', label: 'app2', description: 'The second apprentice on the patrol.' },
    { value: 'n_c:0', label: 'n_c:0', description: 'The first new cat added in an outcome.' },
    { value: 'n_c:1', label: 'n_c:1', description: 'The second new cat added in an outcome.' },
    { value: 'n_c:2', label: 'n_c:2', description: 'The third new cat added in an outcome.' },
    { value: 'c_n', label: 'c_n', description: 'The name of your clan.' },
    { value: 'o_c_n', label: 'o_c_n', description: 'The name of another clan.' },
    {
        label: '[Pronoun]',
        description: 'Build a pronoun tag.',
        isGroup: true,
        prefix: 'PRONOUN',
        types: [
            { value: 'subject', label: 'subject (he/she)' },
            { value: 'object', label: 'object (him/her)' },
            { value: 'poss', label: 'poss (his/her)' },
            { value: 'poss_adj', label: 'poss_adj (his/hers)' },
            { value: 'reflexive', label: 'reflexive (himself/herself)' },
        ]
    },
    {
        label: '[Verb]',
        description: 'Build a verb tag.',
        isGroup: true,
        prefix: 'VERB',
        types: [
            { value: 'be/is', label: 'to be (is/are)' },
            { value: 'have/has', label: 'to have (has/have)' },
            { value: 'do/does', label: 'to do (does/do)' },
            { value: 'charge/charges', label: 'to charge (charges/charge)' },
            { value: 'leap/leaps', label: 'to leap (leaps/leap)' },
            { value: 'accept/accepts', label: 'to accept (accepts/accept)' },
            { value: 'lead/leads', label: 'to lead (leads/lead)' },
        ]
    }
];
const TAG_REGEX = /({[^}]+}|p_l|r_c|s_c|app1|app2|n_c:\d+|c_n|o_c_n|{CAT_COUNT})/g;

const fileUpload = document.getElementById('file-upload');
const patrolList = document.getElementById('patrol-list');
const welcomeScreen = document.getElementById('welcome-screen');
const editorScreen = document.getElementById('editor-screen');
const patrolForm = document.getElementById('patrol-form');
const downloadBtn = document.getElementById('download-btn');
const addNewPatrolBtn = document.getElementById('add-new-patrol-btn');
const filterInput = document.getElementById('filter-input');
const toast = document.getElementById('toast');
const creditsBtn = document.getElementById('credits-btn');
const creditsModal = document.getElementById('credits-modal');
const closeCreditsBtn = document.getElementById('close-credits-btn');

fileUpload.addEventListener('change', handleFileUpload);
addNewPatrolBtn.addEventListener('click', handleAddNewPatrol);
downloadBtn.addEventListener('click', handleDownload);
filterInput.addEventListener('input', () => renderPatrolList());
creditsBtn.addEventListener('click', () => creditsModal.classList.add('visible'));
closeCreditsBtn.addEventListener('click', () => creditsModal.classList.remove('visible'));
creditsModal.addEventListener('click', (e) => { if (e.target === creditsModal) creditsModal.classList.remove('visible'); });

document.addEventListener('click', (e) => {
    if (!e.target.closest('.multi-select-container')) {
        document.querySelectorAll('.multi-select-dropdown').forEach(d => d.classList.add('hidden'));
    }
    if (!e.target.closest('.dynamic-tag-container')) {
         document.querySelectorAll('.tag-helper-popup').forEach(p => p.style.display = 'none');
    }
});

function handleFileUpload(event) {
    const files = event.target.files;
    if (!files.length) return;
    
    patrols = []; 
    currentPatrolId = null;
    isNewPatrol = false;
    editorScreen.classList.add('hidden');
    welcomeScreen.classList.remove('hidden');
    filterInput.value = '';

    let loadedCount = 0;
    const newPatrolsFromFile = [];

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const parsed = JSON.parse(e.target.result);
                const patrolsToAdd = Array.isArray(parsed) ? parsed : [parsed];
                newPatrolsFromFile.push(...patrolsToAdd);
            } catch (error) {
                console.error("Error parsing JSON:", error);
                showToast(`Invalid JSON in file ${file.name}: ${error.message}`, 'error');
            }
            loadedCount++;
            if (loadedCount === files.length) {
                patrols = newPatrolsFromFile;
                renderPatrolList();
                downloadBtn.disabled = false;
                showToast(`${files.length} file(s) loaded successfully!`, 'success');
            }
        };
        reader.readAsText(file);
    });
}

function handleAddNewPatrol() {
    if (patrols.length === 0) {
        showToast('Please load a JSON file first to ensure you have a base to work from.', 'error');
        return;
    }
    currentPatrolId = `new_patrol_${Date.now()}`;
    isNewPatrol = true;
    const newPatrolTemplate = {
        patrol_id: currentPatrolId,
        biome: ["any"],
        season: ["any"],
        types: "border",
        tags: [],
        patrol_art: "",
        min_cats: 1,
        max_cats: 1,
        min_max_status: {},
        weight: 20,
        intro_text: "",
        decline_text: "",
        antagonize_text: "",
        chance_of_success: 50,
        chance_of_antagonize: 0,
        success_outcomes: [],
        fail_outcomes: []
    };
    renderPatrolForm(newPatrolTemplate);
}

function handleDownload() {
    try {
        const finalPatrols = JSON.parse(JSON.stringify(patrols));
        const jsonString = JSON.stringify(finalPatrols, null, 2);
        const blob = new Blob([jsonString], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'patrols_updated.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        showToast('JSON file downloaded!', 'success');
    } catch (e) {
        console.error("Save failed during stringify:", e);
        showToast(`Save failed. Could not generate JSON.`, 'error');
    }
}

function handleSave() {
    try {
        const newPatrolData = {};
        const getVal = (name) => patrolForm.querySelector(`[name="${name}"]`)?.value;
        const getInt = (name) => parseInt(getVal(name), 10);
        const getMultiSelect = (key) => getVal(key)?.split(',').map(s => s.trim()).filter(Boolean) || [];

        newPatrolData.patrol_id = getVal('patrol_id');
        newPatrolData.intro_text = getVal('intro_text');
        newPatrolData.decline_text = getVal('decline_text');
        newPatrolData.antagonize_text = getVal('antagonize_text');
        newPatrolData.patrol_art = getVal('patrol_art') || "";
        newPatrolData.types = getVal('types');
        
        newPatrolData.biome = Array.from(patrolForm.querySelectorAll('[name="biome"]:checked')).map(el => el.value);
        newPatrolData.season = Array.from(patrolForm.querySelectorAll('[name="season"]:checked')).map(el => el.value);
        newPatrolData.tags = getMultiSelect('tags');

        if (getVal('relationship_constraint')) newPatrolData.relationship_constraint = getVal('relationship_constraint');
        if (getVal('pl_skill_constraint')) newPatrolData.pl_skill_constraint = getVal('pl_skill_constraint');
        if (getVal('rival_clan')) newPatrolData.rival_clan = getVal('rival_clan');
        newPatrolData.min_cats = getInt('min_cats');
        newPatrolData.max_cats = getInt('max_cats');
        newPatrolData.weight = getInt('weight');
        newPatrolData.leader_exp = getInt('leader_exp');
        newPatrolData.chance_of_success = getInt('chance_of_success');
        newPatrolData.chance_of_antagonize = getInt('chance_of_antagonize');
        
        newPatrolData.min_max_status = {};
        document.querySelectorAll('#min-max-status-container .min-max-status-row').forEach(row => {
            const status = row.querySelector('input[name="min_max_status_key"]').value;
            const min = parseInt(row.querySelector('input[name="min_max_status_min"]').value, 10);
            const max = parseInt(row.querySelector('input[name="min_max_status_max"]').value, 10);
            if (status && (!isNaN(min) || !isNaN(max))) {
                 newPatrolData.min_max_status[status] = [!isNaN(min) ? min : null, !isNaN(max) ? max : null];
            }
        });

        ['success_outcomes', 'fail_outcomes', 'antag_success_outcomes', 'antag_fail_outcomes'].forEach(sectionKey => {
            const container = document.getElementById(`${sectionKey}-container`);
            if (!container) return;
            const outcomes = [];
            container.querySelectorAll('.outcome-card').forEach(card => {
                const outcome = {
                    text: card.querySelector(`[name^="text-"]`).value,
                    exp: parseInt(card.querySelector(`[name^="exp-"]`).value, 10) || 0,
                    weight: parseInt(card.querySelector(`[name^="weight-"]`).value, 10) || 10,
                };
                const art = card.querySelector(`[name^="art-"]`).value;
                if(art) outcome.art = art;


                card.querySelectorAll('.property-card').forEach(propCard => {
                    const type = propCard.dataset.type;
                    const getMultiSelectValues = (name) => propCard.querySelector(`[name="${name}"]`)?.value.split(',').map(s => s.trim()).filter(Boolean) || [];
                    
                    switch(type) {
                        case 'relationships':
                            if (!outcome.relationships) outcome.relationships = [];
                            outcome.relationships.push({
                                cats_to: getMultiSelectValues('rel_cats_to'),
                                cats_from: getMultiSelectValues('rel_cats_from'),
                                mutual: propCard.querySelector('[name="rel_mutual"]').checked,
                                values: getMultiSelectValues('rel_values'),
                                amount: parseInt(propCard.querySelector('[name="rel_amount"]').value, 10) || 0
                            });
                            break;
                        case 'injury':
                            if (!outcome.injury) outcome.injury = [];
                            outcome.injury.push({
                                cats: getMultiSelectValues('inj_cats'),
                                injuries: getMultiSelectValues('inj_injuries'),
                                scars: getMultiSelectValues('inj_scars')
                            });
                            break;
                        case 'dead_cats': outcome.dead_cats = getMultiSelectValues('dead_cats_list'); break;
                        case 'lost_cats': outcome.lost_cats = getMultiSelectValues('lost_cats_list'); break;
                        case 'stat_trait': outcome.stat_trait = getMultiSelectValues('stat_trait_list'); break;
                        case 'stat_skill': outcome.stat_skill = getMultiSelectValues('stat_skill_list'); break;
                        case 'thoughts':
                            if (!outcome.thoughts) outcome.thoughts = [];
                            outcome.thoughts.push({
                                cats: getMultiSelectValues('thought_cats'),
                                add: getMultiSelectValues('thought_add_list'),
                                remove: getMultiSelectValues('thought_remove_list')
                            });
                            break;
                        case 'outsider_rep':
                            outcome.outsider_rep = parseInt(propCard.querySelector('[name="outsider_rep_amount"]').value, 10) || 0;
                            break;
                        case 'other_clan_rep':
                            outcome.other_clan_rep = parseInt(propCard.querySelector('[name="other_clan_rep_amount"]').value, 10) || 0;
                            break;
                        case 'prey': outcome.prey = getMultiSelectValues('prey_list'); break;
                        case 'herbs': outcome.herbs = getMultiSelectValues('herbs_list'); break;
                        case 'can_have_stat': outcome.can_have_stat = getMultiSelectValues('can_have_stat_list'); break;
                        case 'history_text':
                            const historyText = {
                                scar: propCard.querySelector('[name="history_scar"]').value,
                                reg_death: propCard.querySelector('[name="history_reg_death"]').value,
                                lead_death: propCard.querySelector('[name="history_lead_death"]').value
                            };
                            Object.keys(historyText).forEach(key => { if (!historyText[key]) delete historyText[key]; });
                            if (Object.keys(historyText).length > 0) outcome.history_text = historyText;
                            break;
                        case 'new_cat':
                            if (!outcome.new_cat) outcome.new_cat = [];
                            propCard.querySelectorAll('.cat-definition-card').forEach(defCard => {
                                const properties = [];
                                const typeName = defCard.querySelector('[name="newcat_type_name"]').value.trim();
                                if (typeName) properties.push(typeName);
                                const status = defCard.querySelector('[name="newcat_status"]').value;
                                if (status) properties.push(`status:${status}`);
                                const parentIndex = defCard.querySelector('[name="newcat_parent_index"]').value.trim();
                                if (parentIndex !== '') properties.push(`parent:${parentIndex}`);
                                const backstories = getMultiSelectValues(defCard.querySelector('[name="newcat_backstory"]').name);
                                if (backstories.length > 0) properties.push(`backstory:${backstories.join(',')}`);
                                const otherProps = getMultiSelectValues(defCard.querySelector('[name="newcat_other_props"]').name);
                                properties.push(...otherProps);
                                if (properties.length > 0) outcome.new_cat.push(properties);
                            });
                            break;
                        case 'future_event':
                            if (!outcome.future_event) outcome.future_event = [];
                            propCard.querySelectorAll('.future-event-card').forEach(eventCard => {
                                const event = {};
                                const eventType = eventCard.querySelector('[name="fe_event_type"]').value;
                                if (eventType) event.event_type = eventType;

                                const minDelay = eventCard.querySelector('[name="fe_min_delay"]').value;
                                const maxDelay = eventCard.querySelector('[name="fe_max_delay"]').value;
                                if (minDelay || maxDelay) {
                                    event.moon_delay = [parseInt(minDelay, 10) || 1, parseInt(maxDelay, 10) || 1];
                                }

                                const involvedCats = {};
                                eventCard.querySelectorAll('.involved-cat-row').forEach(row => {
                                    const key = row.querySelector('[name="fe_involved_key"]').value.trim();
                                    const value = row.querySelector('[name="fe_involved_value"]').value.trim();
                                    if (key && value) {
                                        involvedCats[key] = value;
                                    }
                                });
                                if (Object.keys(involvedCats).length > 0) {
                                    event.involved_cats = involvedCats;
                                }
                                
                                const pool = {};
                                ['subtype', 'event_id', 'excluded_event_id'].forEach(poolKey => {
                                    const values = [];
                                    eventCard.querySelectorAll(`.pool-tag-container[data-pool-key="${poolKey}"] .pool-tag`).forEach(tag => {
                                        values.push(tag.dataset.value);
                                    });
                                    if (values.length > 0) {
                                        pool[poolKey] = values;
                                    }
                                });
                                if (Object.keys(pool).length > 0) event.pool = pool;

                                if (Object.keys(event).length > 0) outcome.future_event.push(event);
                            });
                            break;
                    }
                });
                outcomes.push(outcome);
            });
            if (outcomes.length > 0) {
                newPatrolData[sectionKey] = outcomes;
            }
        });

        if (isNewPatrol) {
            patrols.push(newPatrolData);
        } else {
            const index = patrols.findIndex(p => p.patrol_id === currentPatrolId);
            if (index !== -1) patrols[index] = newPatrolData;
        }
        
        isNewPatrol = false;
        currentPatrolId = newPatrolData.patrol_id;
        renderPatrolList();
        showToast('Patrol saved successfully!', 'success');
    } catch (e) {
        console.error("Error saving patrol:", e);
        showToast(`Save failed. Please check your inputs. Error: ${e.message}`, 'error');
    }
}

function renderPatrolList() {
    patrolList.innerHTML = '';
    const filterText = filterInput.value.toLowerCase();
    const filteredPatrols = patrols.filter(p => {
        if (!filterText) return true;
        const inId = p.patrol_id.toLowerCase().includes(filterText);
        const inTags = (p.tags || []).some(tag => tag.toLowerCase().includes(filterText));
        return inId || inTags;
    });

    filteredPatrols.sort((a, b) => a.patrol_id.localeCompare(b.patrol_id)).forEach(patrol => {
        const li = document.createElement('li');
        li.className = `flex justify-between items-center p-3 rounded-md cursor-pointer hover:bg-slate-200 group ${patrol.patrol_id === currentPatrolId ? 'bg-blue-100 text-blue-800 font-semibold' : ''}`;
        li.innerHTML = `<span class="truncate flex-grow">${patrol.patrol_id}</span>
                        <div class="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <button type="button" title="Clone Patrol" class="icon-btn" onclick="clonePatrol('${patrol.patrol_id}', event)">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                            </button>
                        </div>`;
        li.addEventListener('click', (e) => {
            if (e.target.closest('button')) return;
            currentPatrolId = patrol.patrol_id;
            isNewPatrol = false;
            renderPatrolList();
            renderPatrolForm(patrol);
        });
        patrolList.appendChild(li);
    });
}

function renderPatrolForm(patrol) {
    welcomeScreen.classList.add('hidden');
    editorScreen.classList.remove('hidden');
    patrolForm.innerHTML = `
        <div class="bg-white p-8 rounded-xl shadow-md space-y-8">
            <div class="flex justify-end">
                <button type="button" class="bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold py-2 px-4 rounded-lg" onclick="toggleRawJson(this)">View Raw JSON</button>
            </div>
            <div id="form-ui-view">
                ${createAccordionSection('General Information', [
                    createInputField('Patrol ID', 'patrol_id', patrol.patrol_id, 'text'),
                    createTextFieldWithHelper('Intro Text', 'intro_text', patrol.intro_text),
                    createTextFieldWithHelper('Decline Text', 'decline_text', patrol.decline_text),
                    createTextFieldWithHelper('Antagonize Text', 'antagonize_text', patrol.antagonize_text),
                ], true)}
                
                ${createAccordionSection('Configuration', [
                    createCheckboxGroup('Biomes', 'biome', BIOME_OPTIONS, patrol.biome),
                    createCheckboxGroup('Seasons', 'season', SEASON_OPTIONS, patrol.season),
                    createSingleSelect('Patrol Type', 'types', PATROL_TYPES, patrol.types),
                    createTagEditor('Tags', 'tags', (patrol.tags || []).join(', ')),
                    createMultiSelectComponent('Patrol Art', 'patrol_art', Array.from(allPatrolArt), patrol.patrol_art ? [patrol.patrol_art] : [], { single: true, helpText: 'The image to display for the patrol intro.' }),
                    createInputField('Rival Clan', 'rival_clan', patrol.rival_clan, 'text', 'Specify a rival clan ID for this event.'),
                    createMinMaxStatusEditor(patrol.min_max_status),
                    createInputField('Min Cats', 'min_cats', patrol.min_cats, 'number'),
                    createInputField('Max Cats', 'max_cats', patrol.max_cats, 'number'),
                    createInputField('Weight', 'weight', patrol.weight, 'number', 'Higher numbers are more common.'),
                    createInputField('Leader Experience', 'leader_exp', patrol.leader_exp, 'number', 'Experience awarded to the patrol leader.'),
                    createInputField('Chance of Success', 'chance_of_success', patrol.chance_of_success, 'number', 'Percentage chance (0-100) for the success outcomes to be chosen.'),
                    createInputField('Chance of Antagonize', 'chance_of_antagonize', patrol.chance_of_antagonize, 'number', 'Percentage chance (0-100) for the antagonize button to appear.'),
                ])}
                
                ${createAccordionSection('Constraints', [
                    createMultiSelectComponent('Relationship Constraint', 'relationship_constraint', Array.from(allRelationshipConstraints), patrol.relationship_constraint ? [patrol.relationship_constraint] : [], { single: true, helpText: 'Constrains the patrol based on relationships between cats.'}),
                    createMultiSelectComponent('Patrol Leader Skill Constraint', 'pl_skill_constraint', Array.from(allPlSkillConstraints), patrol.pl_skill_constraint ? [patrol.pl_skill_constraint] : [], { single: true, helpText: 'Requires the patrol leader to have a specific skill.'}),
                ])}

                ${createOutcomesSection('Success Outcomes', 'success_outcomes', patrol.success_outcomes)}
                ${createOutcomesSection('Fail Outcomes', 'fail_outcomes', patrol.fail_outcomes)}
                ${createOutcomesSection('Antagonize Success Outcomes', 'antag_success_outcomes', patrol.antag_success_outcomes, true)}
                ${createOutcomesSection('Antagonize Fail Outcomes', 'antag_fail_outcomes', patrol.antag_fail_outcomes, true)}
            </div>
            <div id="raw-json-view" class="hidden">
                <label for="raw-json-textarea" class="block text-lg font-semibold text-slate-700 mb-2">Raw Patrol JSON</label>
                <textarea id="raw-json-textarea" class="w-full h-96 font-mono text-sm p-3 border border-slate-300 rounded-md"></textarea>
                <button type="button" class="mt-2 bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold py-2 px-4 rounded-lg flex items-center gap-2" onclick="copyRawJson()">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    Copy Raw JSON
                </button>
            </div>

            <div class="flex justify-between items-center pt-6 border-t border-slate-200">
                <button type="button" onclick="deletePatrol()" class="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-5 rounded-lg flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clip-rule="evenodd" /></svg>
                    Delete Patrol
                </button>
                <button type="button" onclick="handleSave()" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-5 rounded-lg">Save Changes</button>
            </div>
        </div>
    `;
    setupDynamicFields();
    setTimeout(() => {
        document.querySelectorAll('.accordion-content.open').forEach(acc => {
            if (acc.style.maxHeight !== '0px') {
                acc.style.maxHeight = acc.scrollHeight + 'px';
            }
        });
    }, 50);
}

function createOutcomesSection(title, key, outcomes, isAntagonize = false) {
    let outcomesHtml = (outcomes || []).map((outcome, index) => createOutcomeCard(key, outcome, index)).join('');
    const helpIcon = isAntagonize ? `<div class="tooltip inline-block ml-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" /></svg><span class="tooltiptext">These are the outcomes for the "Antagonize" choice in-game.</span></div>` : '';
    const finalTitle = `<div class="flex items-center">${title}${helpIcon}</div>`;
    return createAccordionSection(finalTitle, [`<div id="${key}-container" class="space-y-4">${outcomesHtml}</div><button type="button" onclick="addOutcomeCard('${key}', this)" class="mt-4 bg-slate-200 hover:bg-slate-300 text-slate-700 font-semibold py-2 px-4 rounded-lg text-sm">Add Outcome</button>`]);
}

function createOutcomeCard(key, outcome, index) {
    const cardId = `${key}-${index}-${Date.now()}`;
    const { text = '', exp = 0, weight = 10, art = '', ...otherProps } = outcome;

    const propertiesHtml = Object.entries(otherProps).map(([propKey, propValue]) => {
        if (!propValue && propValue !== 0) return '';
        const propArray = Array.isArray(propValue) ? propValue : [propValue];
        switch(propKey) {
            case 'relationships': return propArray.map(val => createPropertyCard('relationships', cardId, val)).join('');
            case 'injury': return propArray.map(val => createPropertyCard('injury', cardId, val)).join('');
            case 'thoughts': return propArray.map(val => createPropertyCard('thoughts', cardId, val)).join('');
            case 'new_cat': return createPropertyCard('new_cat', cardId, propValue);
            case 'future_event': return createPropertyCard('future_event', cardId, propValue);
            case 'dead_cats': return createPropertyCard('dead_cats', cardId, propValue);
            case 'lost_cats': return createPropertyCard('lost_cats', cardId, propValue);
            case 'stat_trait': return createPropertyCard('stat_trait', cardId, propValue);
            case 'stat_skill': return createPropertyCard('stat_skill', cardId, propValue);
            case 'outsider_rep': return createPropertyCard('outsider_rep', cardId, propValue);
            case 'other_clan_rep': return createPropertyCard('other_clan_rep', cardId, propValue);
            case 'prey': return createPropertyCard('prey', cardId, propValue);
            case 'herbs': return createPropertyCard('herbs', cardId, propValue);
            case 'can_have_stat': return createPropertyCard('can_have_stat', cardId, propValue);
            case 'history_text': return createPropertyCard('history_text', cardId, propValue);
            default: return '';
        }
    }).join('');

    return `
        <div class="outcome-card bg-white border border-slate-200 p-5 rounded-lg shadow-sm" id="${cardId}">
            <div class="flex justify-between items-center mb-4">
                 <div class="flex items-center gap-1">
                    <button type="button" title="Move Up" class="icon-btn" onclick="moveOutcome(this, -1)"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a.75.75 0 01-.75-.75V4.66L4.72 9.22a.75.75 0 11-1.06-1.06l6.25-6.25a.75.75 0 011.06 0l6.25 6.25a.75.75 0 11-1.06 1.06L10.75 4.66v12.59A.75.75 0 0110 18z" clip-rule="evenodd" /></svg></button>
                    <button type="button" title="Move Down" class="icon-btn" onclick="moveOutcome(this, 1)"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" transform="rotate(180)"><path fill-rule="evenodd" d="M10 18a.75.75 0 01-.75-.75V4.66L4.72 9.22a.75.75 0 11-1.06-1.06l6.25-6.25a.75.75 0 011.06 0l6.25 6.25a.75.75 0 11-1.06 1.06L10.75 4.66v12.59A.75.75 0 0110 18z" clip-rule="evenodd" /></svg></button>
                 </div>
                 <h4 class="font-bold text-slate-700">Outcome</h4>
                 <div class="flex items-center gap-1">
                    <button type="button" title="Clone Outcome" class="icon-btn" onclick="cloneOutcome(this)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                    </button>
                    <button type="button" title="Remove Outcome" class="icon-btn" onclick="removeElement(this, '.outcome-card')">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clip-rule="evenodd" /></svg>
                    </button>
                 </div>
            </div>
            <div class="space-y-4">
                ${createTextFieldWithHelper('Text', `text-${cardId}`, text)}
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    ${createInputField('Weight', `weight-${cardId}`, weight, 'number', 'Higher numbers are more common.')}
                    ${createInputField('Experience', `exp-${cardId}`, exp, 'number')}
                    ${createMultiSelectComponent('Art', `art-${cardId}`, Array.from(allPatrolArt), art ? [art] : [], { single: true })}
                </div>
                <div class="border-t border-slate-200 pt-4 mt-4">
                    <h5 class="font-semibold text-slate-600 mb-2">Outcome Properties</h5>
                    <div id="properties-container-${cardId}" class="space-y-3">${propertiesHtml}</div>
                    <div class="mt-3">
                        <select id="add-property-select-${cardId}" class="p-2 border border-slate-300 rounded-md">
                            <option value="">Add a property...</option>
                            <option value="relationships">Relationship Change</option>
                            <option value="injury">Injury / Scar</option>
                            <option value="thoughts">Add/Remove Thoughts</option>
                            <option value="new_cat">Add New Cat</option>
                            <option value="future_event">Future Event</option>
                            <option value="dead_cats">Dead Cats</option>
                            <option value="lost_cats">Lost Cats</option>
                            <option value="stat_trait">Trait Requirement</option>
                            <option value="stat_skill">Skill Requirement</option>
                            <option value="can_have_stat">'Can Have' Stat</option>
                            <option value="outsider_rep">Outsider Reputation</option>
                            <option value="other_clan_rep">Other Clan Reputation</option>
                            <option value="history_text">History Text</option>
                            <option value="prey">Give Prey</option>
                            <option value="herbs">Give Herbs</option>
                        </select>
                        <button type="button" onclick="addProperty('${cardId}', this)" class="bg-blue-100 text-blue-800 font-semibold py-2 px-4 rounded-lg text-sm ml-2">Add</button>
                    </div>
                </div>
            </div>
        </div>`;
}

function createPropertyCard(type, cardId, data = {}) {
    const propertyId = `prop-${Date.now()}`;
    let content = '';
    
    switch(type) {
        case 'relationships':
            content = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${createMultiSelectComponent('Cats To', 'rel_cats_to', CAT_TARGETS_FOR_DROPDOWN.map(c => c.value), data.cats_to)}
                ${createMultiSelectComponent('Cats From', 'rel_cats_from', CAT_TARGETS_FOR_DROPDOWN.map(c => c.value), data.cats_from)}
                ${createMultiSelectComponent('Values', 'rel_values', Array.from(allRelValues), data.values)}
                ${createInputField('Amount', 'rel_amount', data.amount || 0, 'number')}
                </div><label class="flex items-center space-x-2 mt-2"><input type="checkbox" name="rel_mutual" ${data.mutual ? 'checked' : ''}><span>Mutual</span></label>`;
            break;
        case 'injury':
             content = `<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                ${createMultiSelectComponent('Cats', 'inj_cats', CAT_TARGETS_FOR_DROPDOWN.map(c => c.value), data.cats)}
                ${createMultiSelectComponent('Injuries', 'inj_injuries', Array.from(allInjuries), data.injuries)}
                ${createMultiSelectComponent('Scars', 'inj_scars', Array.from(allScars), data.scars)}
                </div>`;
            break;
        case 'dead_cats':
            content = createMultiSelectComponent('Cats', 'dead_cats_list', CAT_TARGETS_FOR_DROPDOWN.map(c => c.value), Array.isArray(data) ? data : []);
            break;
        case 'lost_cats':
            content = createMultiSelectComponent('Cats', 'lost_cats_list', CAT_TARGETS_FOR_DROPDOWN.map(c => c.value), Array.isArray(data) ? data : []);
            break;
        case 'stat_trait':
            content = createMultiSelectComponent('Traits', 'stat_trait_list', Array.from(allStatTraits), Array.isArray(data) ? data : [], { helpText: 'Makes outcome more likely for cats with these traits. The cat will be `s_c`.' });
            break;
        case 'stat_skill':
            content = createMultiSelectComponent('Skills', 'stat_skill_list', Array.from(allStatSkills), Array.isArray(data) ? data : [], { helpText: 'e.g., FIGHTER,3. The cat will be `s_c`.' });
            break;
         case 'can_have_stat':
            content = createMultiSelectComponent('Targets', 'can_have_stat_list', Array.from(allCanHaveStatTargets), Array.isArray(data) ? data : [], { helpText: 'Allows a stat-based outcome to pick from a wider pool.' });
            break;
        case 'thoughts':
            content = `<div class="space-y-2">
                ${createMultiSelectComponent('Cats', 'thought_cats', CAT_TARGETS_FOR_DROPDOWN.map(c => c.value), data.cats)}
                ${createMultiSelectComponent('Add Thoughts', 'thought_add_list', Array.from(allThoughts), data.add)}
                ${createMultiSelectComponent('Remove Thoughts', 'thought_remove_list', Array.from(allThoughts), data.remove)}
                </div>`;
            break;
        case 'outsider_rep':
            content = createInputField('Reputation Change', 'outsider_rep_amount', data || 0, 'number', 'Change reputation with outsiders. Can be positive or negative.');
            break;
        case 'other_clan_rep':
            content = createInputField('Reputation Change', 'other_clan_rep_amount', data || 0, 'number', 'Change reputation with another clan. Can be positive or negative.');
            break;
        case 'prey':
            content = createMultiSelectComponent('Prey', 'prey_list', Array.from(allPrey), Array.isArray(data) ? data : []);
            break;
        case 'herbs':
            content = createMultiSelectComponent('Herbs', 'herbs_list', Array.from(allHerbs), Array.isArray(data) ? data : []);
            break;
        case 'history_text':
            const dataObj = (typeof data === 'object' && data !== null && !Array.isArray(data)) ? data : {};
            content = `<div class="space-y-2">${createInputField('Scar Text', 'history_scar', dataObj.scar || '', 'text')}
                        ${createInputField('Regular Death Text', 'history_reg_death', dataObj.reg_death || '', 'text')}
                        ${createInputField('Leader Death Text', 'history_lead_death', dataObj.lead_death || '', 'text')}</div>`;
            break;
        case 'new_cat':
            const catDefinitions = Array.isArray(data) ? data : [];
            const catCardsHtml = catDefinitions.map((catProps, index) => createCatDefinitionCard(catProps, index)).join('');
            content = `<div class="new-cat-container space-y-3">${catCardsHtml}</div>
                       <button type="button" class="mt-2 bg-blue-100 text-blue-800 font-semibold py-1 px-3 rounded-lg text-xs" onclick="addCatDefinition(this)">+ Add Cat</button>`;
            break;
        case 'future_event':
            const events = Array.isArray(data) ? data : [];
            const eventCardsHtml = events.map((event, index) => createFutureEventCard(event, index)).join('');
            content = `<div class="future-event-container space-y-3">${eventCardsHtml}</div>
                       <button type="button" class="mt-2 bg-blue-100 text-blue-800 font-semibold py-1 px-3 rounded-lg text-xs" onclick="addFutureEvent(this)">+ Add Future Event</button>`;
            break;
    }
    return `<div class="property-card p-4 rounded-md" data-type="${type}" id="${propertyId}"><div class="flex justify-between items-center mb-2"><h6 class="font-medium text-slate-800 capitalize">${type.replace(/_/g, ' ')}</h6><button type="button" title="Remove Property" class="icon-btn" onclick="removeElement(this, '.property-card')"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clip-rule="evenodd" /></svg></button></div>${content}</div>`;
}

function createFutureEventCard(event = {}, index) {
    const eventTypeOptions = Array.from(allFutureEventTypes).map(t => `<option value="${t}" ${event.event_type === t ? 'selected' : ''}>${t}</option>`).join('');
    const involvedCatsRows = event.involved_cats ? Object.entries(event.involved_cats).map(([key, value]) => createInvolvedCatRow(key, value)).join('') : '';
    
    return `
        <div class="future-event-card bg-slate-50 p-3 rounded-md border border-slate-200" data-index="${index}">
            <div class="flex justify-between items-center mb-2">
                <h6 class="font-semibold text-slate-600">Event ${index + 1}</h6>
                 <button type="button" title="Remove Future Event" class="icon-btn" onclick="removeElement(this, '.future-event-card')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clip-rule="evenodd" /></svg>
                </button>
            </div>
            <div class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                     <div>
                        <label class="block text-sm font-medium text-slate-600 mb-1">Event Type</label>
                        <select name="fe_event_type" class="w-full p-3 border border-slate-300 rounded-md shadow-sm">
                            <option value="">-- None --</option>
                            ${eventTypeOptions}
                        </select>
                    </div>
                    ${createInputField('Min Moon Delay', 'fe_min_delay', event.moon_delay ? event.moon_delay[0] : 1, 'number')}
                    ${createInputField('Max Moon Delay', 'fe_max_delay', event.moon_delay ? event.moon_delay[1] : 1, 'number')}
                </div>
                
                <div class="border-t pt-3">
                     <h6 class="font-medium text-slate-600 mb-2 text-sm">Involved Cats</h6>
                     <div class="involved-cats-container space-y-2">${involvedCatsRows}</div>
                     <button type="button" class="mt-2 bg-slate-200 text-slate-700 text-xs font-semibold py-1 px-3 rounded-md" onclick="addInvolvedCatRow(this)">+ Add Involved Cat</button>
                </div>

                <div class="border-t pt-3">
                     <h6 class="font-medium text-slate-600 mb-2 text-sm">Event Pool</h6>
                     ${createPoolTagInput('Included Subtypes', 'subtype', event.pool?.subtype)}
                     ${createPoolTagInput('Included Event IDs', 'event_id', event.pool?.event_id)}
                     ${createPoolTagInput('Excluded Event IDs', 'excluded_event_id', event.pool?.excluded_event_id)}
                </div>
            </div>
        </div>
    `;
}

function addFutureEvent(button) {
    const container = button.previousElementSibling;
    if (!container) return;
    const newIndex = container.children.length;
    const newCardHtml = createFutureEventCard({}, newIndex);
    container.insertAdjacentHTML('beforeend', newCardHtml);
    updateAccordionHeight(button);
}

function createInvolvedCatRow(key = '', value = '') {
    const parentRoleOptions = CAT_TARGETS_FOR_DROPDOWN.map(opt => `<option value="${opt.value}" ${opt.value === value ? 'selected' : ''}>${opt.label}</option>`).join('');
    return `<div class="involved-cat-row flex items-center gap-2">
                <input type="text" name="fe_involved_key" placeholder="Future Role (e.g. m_c)" value="${key}" class="w-full p-2 border border-slate-300 rounded-md text-sm">
                <span class="text-slate-500">:</span>
                <select name="fe_involved_value" class="w-full p-2 border border-slate-300 rounded-md text-sm">
                    <option value="">Select Parent Role...</option>
                    ${parentRoleOptions}
                </select>
                <button type="button" class="icon-btn" onclick="removeElement(this, '.involved-cat-row')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" /></svg>
                </button>
            </div>`;
}

function addInvolvedCatRow(button) {
    const container = button.previousElementSibling;
    if (container) {
        container.insertAdjacentHTML('beforeend', createInvolvedCatRow());
        updateAccordionHeight(button);
    }
}

function createPoolTagInput(label, key, values = []) {
    const tagsHtml = (values || []).map(val => `<span class="pool-tag" data-value="${val}">${val}<span class="pool-tag-remove" onclick="this.parentElement.remove()">&times;</span></span>`).join('');
    return `<div class="mb-3">
                <label class="block text-xs font-medium text-slate-500 mb-1">${label}</label>
                <div class="flex items-center gap-2">
                     <input type="text" placeholder="Add a value..." class="w-full p-2 border border-slate-300 rounded-md text-sm">
                     <button type="button" class="bg-indigo-100 text-indigo-800 font-semibold py-2 px-3 rounded-md text-xs" onclick="addPoolTag(this, '${key}')">Add</button>
                </div>
                <div class="pool-tag-container mt-2" data-pool-key="${key}">${tagsHtml}</div>
            </div>`;
}

function addPoolTag(button, key) {
    const input = button.previousElementSibling;
    const value = input.value.trim();
    if (!value) return;

    const container = button.parentElement.nextElementSibling;
    const tag = document.createElement('span');
    tag.className = 'pool-tag';
    tag.dataset.value = value;
    tag.innerHTML = `${value}<span class="pool-tag-remove" onclick="this.parentElement.remove()">&times;</span>`;
    
    container.appendChild(tag);
    input.value = '';
}

function createCatDefinitionCard(properties = [], index) {
    const safeProps = Array.isArray(properties) ? properties : [];
    let typeName = '', status = '', parentIndex = '', backstories = [], otherProps = [];
    if (safeProps.length > 0) {
        typeName = safeProps[0];
        safeProps.slice(1).forEach(prop => {
            if (prop.startsWith('status:')) status = prop.substring(7);
            else if (prop.startsWith('parent:')) parentIndex = prop.substring(7);
            else if (prop.startsWith('backstory:')) backstories = prop.substring(10).split(',');
            else otherProps.push(prop);
        });
    }
    const statusOptions = Array.from(allMinMaxStatuses).map(s => `<option value="${s}" ${status === s ? 'selected' : ''}>${s}</option>`).join('');
    return `
        <div class="cat-definition-card bg-slate-50 p-3 rounded-md border border-slate-200" data-index="${index}">
            <div class="flex justify-between items-center mb-2">
                <h6 class="font-semibold text-slate-600">Cat ${index + 1} Definition</h6>
                <button type="button" title="Remove Cat Definition" class="icon-btn" onclick="removeElement(this, '.cat-definition-card')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clip-rule="evenodd" /></svg>
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${createInputField('Type / Name', 'newcat_type_name', typeName, 'text', 'e.g., loner, kittypet, litter, or a specific name.')}
                <div>
                    <label class="block text-sm font-medium text-slate-600 mb-1">Status</label>
                    <select name="newcat_status" class="w-full p-3 border border-slate-300 rounded-md shadow-sm">
                        <option value="">-- None --</option>
                        ${statusOptions}
                    </select>
                </div>
                <div>
                    <label class="flex items-center text-sm font-medium text-slate-600 mb-1">
                        <span>Parent Index</span>
                        <div class="tooltip ml-1.5"><svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" /></svg><span class="tooltiptext">Used for litters. The index of the parent cat in this list, starting from 0. For example, if the first cat is the parent, this would be 0.</span></div>
                    </label>
                    <input type="number" name="newcat_parent_index" value="${parentIndex}" class="w-full p-3 border border-slate-300 rounded-md shadow-sm" placeholder="e.g., 0">
                </div>
                ${createMultiSelectComponent('Backstory', `newcat_backstory`, Array.from(allNewCatBackstories), backstories, { noLabel: false })}
            </div>
            <div class="mt-4">
                ${createMultiSelectComponent('Other Properties', `newcat_other_props`, Array.from(allNewCatProps), otherProps, { helpText: 'Any other properties, like age:has_kits, dead, male, etc.' })}
            </div>
        </div>
    `;
}

function addCatDefinition(button) {
    const container = button.previousElementSibling;
    if (!container) return;
    const newIndex = container.children.length;
    const newCardHtml = createCatDefinitionCard([], newIndex);
    container.insertAdjacentHTML('beforeend', newCardHtml);
    const newCard = container.lastElementChild;
    newCard.querySelectorAll('.multi-select-container').forEach(setupMultiSelect);
    updateAccordionHeight(button);
}

function removeElement(button, selector) {
    const elementToRemove = button.closest(selector);
    if (elementToRemove) {
        const accordion = elementToRemove.closest('.accordion-content');
        elementToRemove.remove();
        if (accordion) updateAccordionHeight(accordion);
    }
}

function addProperty(cardId, button) {
    const select = document.getElementById(`add-property-select-${cardId}`);
    const type = select.value;
    if (!type) return;
    const container = document.getElementById(`properties-container-${cardId}`);
    const newCardHTML = createPropertyCard(type, cardId);
    container.insertAdjacentHTML('beforeend', newCardHTML);
    const newCard = container.lastElementChild;
    
    newCard.querySelectorAll('.multi-select-container').forEach(setupMultiSelect);

    select.value = '';
    updateAccordionHeight(button);
}

function deletePatrol() {
    if (confirm(`Are you sure you want to delete patrol "${currentPatrolId}"? This cannot be undone.`)) {
        patrols = patrols.filter(p => p.patrol_id !== currentPatrolId);
        currentPatrolId = null;
        isNewPatrol = false;
        renderPatrolList();
        editorScreen.classList.add('hidden');
        welcomeScreen.classList.remove('hidden');
        showToast('Patrol deleted.', 'success');
    }
}

function addOutcomeCard(key, button) {
    const container = document.getElementById(`${key}-container`);
    const newIndex = container ? container.children.length : 0;
    const newCardHtml = createOutcomeCard(key, {}, newIndex);
    if(container) {
        container.insertAdjacentHTML('beforeend', newCardHtml);
        setupDynamicFields(container.lastElementChild);
        updateAccordionHeight(button);
    }
}

function clonePatrol(patrolId, event) {
    event.stopPropagation();
    const originalPatrol = patrols.find(p => p.patrol_id === patrolId);
    if (!originalPatrol) return;
    const clonedPatrol = JSON.parse(JSON.stringify(originalPatrol));
    clonedPatrol.patrol_id = `${originalPatrol.patrol_id}_clone_${Date.now()}`;
    patrols.push(clonedPatrol);
    renderPatrolList();
    showToast(`Cloned ${patrolId}`, 'success');
}

function cloneOutcome(button) {
    const outcomeCard = button.closest('.outcome-card');
    const container = outcomeCard.parentElement;
    const newCard = outcomeCard.cloneNode(true);
    
    const oldId = newCard.id;
    const newId = `${oldId.split('-').slice(0, -1).join('-')}-${Date.now()}`;
    newCard.id = newId;
    newCard.querySelectorAll('[id]').forEach(el => {
        if(el.id) el.id = el.id.replace(oldId, newId);
    });
    newCard.querySelectorAll('[name]').forEach(el => {
        if(el.name) el.name = el.name.replace(oldId, newId);
    });

    container.appendChild(newCard);
    setupDynamicFields(newCard);
    updateAccordionHeight(button);
    showToast('Outcome cloned', 'success');
}

function moveOutcome(button, direction) {
    const outcomeCard = button.closest('.outcome-card');
    const container = outcomeCard.parentElement;
    if (direction === -1) {
        const previousElement = outcomeCard.previousElementSibling;
        if (previousElement) {
            container.insertBefore(outcomeCard, previousElement);
        }
    } else {
        const nextElement = outcomeCard.nextElementSibling;
        if (nextElement) {
            container.insertBefore(nextElement, outcomeCard);
        }
    }
}

function createAccordionSection(title, fieldsHtml, isOpen = false) {
    const id = `accordion-${title.replace(/[^a-zA-Z0-9]/g, '-')}`;
    return `<div class="border border-slate-200 rounded-lg">
                <button type="button" class="w-full flex justify-between items-center p-5 bg-slate-50 hover:bg-slate-100" onclick="toggleAccordion('${id}')">
                    <h3 class="text-xl font-semibold text-slate-700">${title}</h3>
                    <svg class="w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div id="${id}" class="accordion-content ${isOpen ? 'open' : ''}" style="${isOpen ? 'max-height: initial;' : ''}">
                    <div class="p-6 pt-4 space-y-6">
                        ${fieldsHtml.join('')}
                    </div>
                </div>
            </div>`;
}

function toggleAccordion(id) {
    const content = document.getElementById(id);
    const svg = content.previousElementSibling.querySelector('svg');
    if (content.classList.contains('open')) {
        content.classList.remove('open');
        content.style.maxHeight = '0px';
        svg.style.transform = 'rotate(0deg)';
    } else {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        svg.style.transform = 'rotate(180deg)';
    }
}

function updateAccordionHeight(element) {
    const accordionContent = element.closest('.accordion-content');
    if (accordionContent && accordionContent.classList.contains('open')) {
        setTimeout(() => {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        }, 50);
    }
}

function createTextFieldWithHelper(label, name, value) {
    const tagHelperHtml = TEXT_TAGS.map(tag => {
        if (tag.isGroup) {
            return createDynamicTagHelper(tag, name);
        }
        return `<button type="button" class="tag-helper-btn" title="${tag.description}" onclick="insertAtCursor('${name}', '${tag.value}')">${tag.label}</button>`;
    }).join('');

    return `<div class="col-span-full">
                <label for="${name}" class="block text-sm font-medium text-slate-600 mb-1">${label}</label>
                <div class="flex flex-wrap items-center gap-2 mb-2 p-3 bg-slate-100 rounded-md">${tagHelperHtml}</div>
                <div class="highlight-container">
                    <div id="highlight-${name}" class="highlight-div"></div>
                    <textarea name="${name}" id="${name}" class="shadow-sm" oninput="updateHighlight(this)" onscroll="this.previousElementSibling.scrollTop = this.scrollTop; this.previousElementSibling.scrollLeft = this.scrollLeft;">${value || ''}</textarea>
                </div>
            </div>`;
}

function createDynamicTagHelper(tagGroup, textareaId) {
    const catOptions = CAT_TARGETS_FOR_DROPDOWN.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('');
    const typeOptions = tagGroup.types.map(opt => `<option value="${opt.value}">${opt.label}</option>`).join('');

    return `<div class="relative inline-block dynamic-tag-container">
                <button type="button" class="tag-helper-btn dynamic-tag-btn" title="${tagGroup.description}" onclick="toggleTagHelperPopup(this)">${tagGroup.label}</button>
                <div class="tag-helper-popup">
                    <div class="space-y-3">
                        <select class="w-full p-2 border border-slate-300 rounded-md text-sm">
                            <option value="">Select Cat Target...</option>
                            ${catOptions}
                        </select>
                        <select class="w-full p-2 border border-slate-300 rounded-md text-sm">
                            <option value="">Select Type...</option>
                            ${typeOptions}
                        </select>
                        <label class="flex items-center space-x-2 text-sm text-slate-600 cursor-pointer">
                            <input type="checkbox" class="rounded border-gray-300 text-blue-600 shadow-sm focus:ring-blue-500">
                            <span>Capitalize (e.g., He/She)</span>
                        </label>
                        <button type="button" class="w-full bg-blue-500 text-white text-sm font-semibold py-2 px-3 rounded-md" onclick="insertDynamicTag(this, '${textareaId}', '${tagGroup.prefix}')">Insert</button>
                    </div>
                </div>
            </div>`;
}

function toggleTagHelperPopup(button) {
    const popup = button.nextElementSibling;
    const isVisible = popup.style.display === 'block';
    document.querySelectorAll('.tag-helper-popup').forEach(p => p.style.display = 'none');
    popup.style.display = isVisible ? 'none' : 'block';
}

function insertDynamicTag(button, textareaId, prefix) {
    const popup = button.closest('.tag-helper-popup');
    const selects = popup.querySelectorAll('select');
    const catTarget = selects[0].value;
    const type = selects[1].value;
    const isCapped = popup.querySelector('input[type="checkbox"]').checked;

    if (!catTarget || !type) {
        showToast('Please select both a cat and a type.', 'error');
        return;
    }

    const capModifier = isCapped ? '/CAP' : '';
    const tagToInsert = `{${prefix}/${catTarget}/${type}${capModifier}}`;
    insertAtCursor(textareaId, tagToInsert);
    popup.style.display = 'none';
}

function createInputField(label, name, value, type = 'text', helpText = '') {
    const helpHtml = helpText ? `<p class="text-xs text-slate-500 mt-1">${helpText}</p>` : '';
    return `<div><label for="${name}" class="block text-sm font-medium text-slate-600 mb-1">${label}</label><input type="${type}" name="${name}" id="${name}" value="${value || ''}" class="w-full p-3 border border-slate-300 rounded-md shadow-sm">${helpHtml}</div>`;
}

function createSingleSelect(label, name, options, selectedValue = '') {
    const optionsHtml = options.map(option => `<option value="${option}" ${selectedValue === option ? 'selected' : ''}>${option}</option>`).join('');
    return `<div>
                <label for="${name}" class="block text-sm font-medium text-slate-600 mb-1">${label}</label>
                <select id="${name}" name="${name}" class="w-full p-3 border border-slate-300 rounded-md shadow-sm">
                    <option value="">-- None --</option>
                    ${optionsHtml}
                </select>
            </div>`;
}

function createCheckboxGroup(label, name, options, selectedValues = []) {
    const checkboxesHtml = options.map(option => `<label class="flex items-center space-x-2"><input type="checkbox" name="${name}" value="${option}" class="rounded border-gray-300 text-blue-600 shadow-sm" ${(selectedValues || []).includes(option) ? 'checked' : ''}><span class="capitalize">${option.replace('-', ' ')}</span></label>`).join('');
    return `<div><label class="block text-sm font-medium text-slate-600 mb-2">${label}</label><div class="flex flex-wrap gap-x-6 gap-y-3">${checkboxesHtml}</div></div>`;
}

function createTagEditor(label, name, value) {
    return `<div><label for="${name}" class="block text-sm font-medium text-slate-600 mb-1">${label}</label><input type="text" name="${name}" id="${name}" value="${value || ''}" class="w-full p-3 border border-slate-300 rounded-md shadow-sm" placeholder="Comma-separated tags"><div class="mt-2"><input type="text" id="tag-search" class="w-full p-3 border border-slate-200 rounded-md mb-2" placeholder="Search existing tags to add..."><div id="tag-list-container" class="flex flex-wrap gap-2 max-h-40 overflow-y-auto custom-scrollbar p-3 bg-slate-50 rounded-md"></div></div></div>`;
}

function createMinMaxStatusEditor(statuses = {}) {
    let rowsHtml = Object.entries(statuses).map(([key, value]) => createMinMaxStatusRow(key, value)).join('');
    return `<div><label class="block text-sm font-medium text-slate-600 mb-1">Min/Max Status Requirements</label><p class="text-xs text-slate-500 mb-2">Require a specific number of cats with a certain status (e.g., leader, medicine cat) to be on the patrol.</p><div id="min-max-status-container" class="space-y-2">${rowsHtml}</div><button type="button" class="mt-2 bg-slate-200 hover:bg-slate-300 text-slate-700 text-sm py-2 px-3 rounded" onclick="addMinMaxStatusRow(this)">+ Add Status</button></div>`;
}

function createMinMaxStatusRow(key = '', value = [null, null]) {
    return `<div class="flex items-center gap-2 min-max-status-row">
                <div class="flex-grow">${createMultiSelectComponent('Status', 'min_max_status_key', Array.from(allMinMaxStatuses), key ? [key] : [], { single: true, noLabel: true })}</div>
                <input type="number" name="min_max_status_min" class="w-1/4 p-3 border border-slate-300 rounded-md" placeholder="Min" value="${value[0] !== null ? value[0] : ''}">
                <input type="number" name="min_max_status_max" class="w-1/4 p-3 border border-slate-300 rounded-md" placeholder="Max" value="${value[1] !== null ? value[1] : ''}">
                <button type="button" class="icon-btn" onclick="removeElement(this, '.min-max-status-row')">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm4 0a1 1 0 012 0v6a1 1 0 11-2 0V8z" clip-rule="evenodd" /></svg>
                </button>
            </div>`;
}

function addMinMaxStatusRow(button) {
    const container = document.getElementById('min-max-status-container');
    container.insertAdjacentHTML('beforeend', createMinMaxStatusRow());
    setupMultiSelect(container.lastElementChild.querySelector('.multi-select-container'));
    updateAccordionHeight(button);
}

function createMultiSelectComponent(label, name, availableOptions, selectedValues = [], config = {}) {
    const { single = false, helpText = '', noLabel = false } = config;
    const labelHtml = noLabel ? '' : `<label class="block text-sm font-medium text-slate-600 mb-1">${label}</label>`;
    const helpHtml = helpText ? `<p class="text-xs text-slate-500 mt-1">${helpText}</p>` : '';
    const initialValue = Array.isArray(selectedValues) ? selectedValues.join(', ') : (selectedValues || '');
    return `
        <div class="multi-select-root">
            ${labelHtml}
            <div class="multi-select-container" data-name="${name}" data-single="${single}">
                <input type="hidden" name="${name}" value="${initialValue}">
                <div class="multi-select-input">
                    <input type="text" class="multi-select-search" placeholder="Search or select...">
                </div>
                <div class="multi-select-dropdown hidden">
                    ${(availableOptions || []).sort().map(opt => `<div class="multi-select-option" data-value="${opt}">${opt}</div>`).join('')}
                </div>
            </div>
            ${helpHtml}
        </div>`;
}

function setupMultiSelect(container) {
    if (!container) return;
    const input = container.querySelector('.multi-select-input');
    const searchInput = container.querySelector('.multi-select-search');
    const dropdown = container.querySelector('.multi-select-dropdown');
    const hiddenInput = container.querySelector('input[type="hidden"]');
    const isSingle = container.dataset.single === 'true';

    const updateHiddenInput = () => {
        const tags = Array.from(input.querySelectorAll('.multi-select-tag')).map(tag => tag.dataset.value);
        hiddenInput.value = tags.join(', ');
    };

    const addTag = (value) => {
        if (!value) return;
        const existingTags = Array.from(input.querySelectorAll('.multi-select-tag')).map(tag => tag.dataset.value);
        if (existingTags.includes(value) && !isSingle) return;

        if (isSingle) {
            input.querySelectorAll('.multi-select-tag').forEach(t => t.remove());
        }

        const tag = document.createElement('div');
        tag.className = 'multi-select-tag';
        tag.dataset.value = value;
        tag.innerHTML = `<span>${value}</span><span class="multi-select-tag-remove">&times;</span>`;
        tag.querySelector('.multi-select-tag-remove').addEventListener('click', (e) => {
            e.stopPropagation();
            tag.remove();
            updateHiddenInput();
        });
        input.insertBefore(tag, searchInput);
        updateHiddenInput();
        searchInput.value = '';
        filterOptions('');
    };

    const filterOptions = (query) => {
        dropdown.querySelectorAll('.multi-select-option').forEach(opt => {
            const matches = opt.dataset.value.toLowerCase().includes(query.toLowerCase());
            opt.style.display = matches ? '' : 'none';
        });
    };

    hiddenInput.value.split(',').map(s => s.trim()).filter(Boolean).forEach(addTag);

    input.addEventListener('click', () => dropdown.classList.remove('hidden'));
    searchInput.addEventListener('input', () => filterOptions(searchInput.value));
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && searchInput.value) {
            e.preventDefault();
            addTag(searchInput.value);
        }
    });
    dropdown.addEventListener('click', (e) => {
        if (e.target.classList.contains('multi-select-option')) {
            addTag(e.target.dataset.value);
            if (isSingle) {
                dropdown.classList.add('hidden');
            }
        }
    });
}

function setupDynamicFields(context = document) {
    const tagInput = context.querySelector('[name="tags"]');
    if (tagInput) {
        const tagEditor = tagInput.closest('div');
        const tagSearch = tagEditor.querySelector('#tag-search');
        const tagListContainer = tagEditor.querySelector('#tag-list-container');
        if (tagSearch && tagListContainer) {
            const renderClickableTags = (filter = '') => {
                tagListContainer.innerHTML = '';
                const sortedTags = Array.from(allTags).sort();
                sortedTags.forEach(tag => {
                    if (filter && !tag.toLowerCase().includes(filter.toLowerCase())) return;
                    const tagEl = document.createElement('span');
                    tagEl.className = 'clickable-tag';
                    tagEl.textContent = tag;
                    tagEl.onclick = () => {
                        const currentTags = tagInput.value.split(',').map(t => t.trim()).filter(Boolean);
                        if (!currentTags.includes(tag)) {
                            currentTags.push(tag);
                        }
                        tagInput.value = currentTags.join(', ');
                    };
                    tagListContainer.appendChild(tagEl);
                });
            };
            tagSearch.addEventListener('input', () => renderClickableTags(tagSearch.value));
            renderClickableTags();
        }
    }

    context.querySelectorAll('.multi-select-container').forEach(setupMultiSelect);
    context.querySelectorAll('.highlight-container textarea').forEach(updateHighlight);
}

function updateHighlight(textarea) {
    const highlightDiv = document.getElementById(`highlight-${textarea.id}`);
    if (!highlightDiv) return;

    let text = textarea.value;
    text = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const highlightedText = text.replace(TAG_REGEX, '<span class="highlighted-tag">$&</span>');
    highlightDiv.innerHTML = highlightedText.replace(/\n/g, '<br>') + ' ';
}

function insertAtCursor(textareaId, textToInsert) {
    const textarea = document.getElementById(textareaId);
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    textarea.value = text.substring(0, start) + textToInsert + text.substring(end);
    textarea.selectionStart = textarea.selectionEnd = start + textToInsert.length;
    textarea.focus();
    updateHighlight(textarea);
}

function showToast(message, type = 'success') {
    toast.textContent = message;
    toast.className = `fixed bottom-5 right-5 text-white py-3 px-5 rounded-lg shadow-lg transition-opacity duration-300 opacity-100 z-50 ${type === 'success' ? 'bg-green-500' : 'bg-red-500'}`;
    setTimeout(() => {
        toast.style.opacity = '0';
    }, 3000);
}

function toggleRawJson(button) {
    const formUiView = document.getElementById('form-ui-view');
    const rawJsonView = document.getElementById('raw-json-view');
    const textarea = document.getElementById('raw-json-textarea');

    if (formUiView.classList.contains('hidden')) {
        try {
            const updatedPatrol = JSON.parse(textarea.value);
            const index = patrols.findIndex(p => p.patrol_id === currentPatrolId);
            if (index !== -1) {
                patrols[index] = updatedPatrol;
            } else if (isNewPatrol && currentPatrolId === updatedPatrol.patrol_id) {
                patrols.push(updatedPatrol);
            }
             else { 
                showToast('Patrol ID was changed. Cannot find original to update.', 'error');
                return;
            }
            currentPatrolId = updatedPatrol.patrol_id;
            renderPatrolForm(updatedPatrol);
            renderPatrolList();
            showToast('Updated from Raw JSON.', 'success');
        } catch (e) {
            showToast('Invalid JSON. Changes not saved.', 'error');
            return;
        }
        formUiView.classList.remove('hidden');
        rawJsonView.classList.add('hidden');
        button.textContent = 'View Raw JSON';
    } else {
        handleSave();
        const patrolData = patrols.find(p => p.patrol_id === currentPatrolId);
        textarea.value = JSON.stringify(patrolData, null, 2);
        formUiView.classList.add('hidden');
        rawJsonView.classList.remove('hidden');
        button.textContent = 'View UI Editor';
    }
}

function copyToClipboard(text, event) {
    event.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied: ${text}`, 'success');
    }, () => {
        showToast('Failed to copy!', 'error');
    });
}

function copyRawJson() {
    const textarea = document.getElementById('raw-json-textarea');
    textarea.select();
    navigator.clipboard.writeText(textarea.value).then(() => {
         showToast('Copied Raw JSON to clipboard!', 'success');
    }, () => {
         showToast('Failed to copy!', 'error');
    });
}