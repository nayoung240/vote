const voteList: string[] = [];
voteList.push('철구')
voteList.push('봉준')
voteList.push('감스트')

const candidateUl = document.getElementById('candidateUl');

if(candidateUl) {
    let addDiv: string = '';
    
    voteList.forEach((value, key) => {
        addDiv += `<li style="padding-left: 10px;" class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                        <div class="flex items-center pl-3">
                            <input id="horizontal-list-radio-license${key}" type="radio" value="${value}" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                            <label for="horizontal-list-radio-license${key}" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">${value}</label>
                        </div>
                    </li>`;
    });
    
    candidateUl.insertAdjacentHTML('beforeend', addDiv);
}

const submitUserVote = () => {
    const inputRadio = document.querySelectorAll('input[name="list-radio"]');

    for (let i = 0; i <= inputRadio.length; i++) {
        const radio = inputRadio[i] as HTMLFormElement;
        console.log(radio.value);

        if(radio.checked) {
            console.log('선택',radio.value);
            break;
        }
    }
};

const userSubmitBtn = document.getElementById("userSubmitBtn");
userSubmitBtn?.addEventListener("click", submitUserVote);