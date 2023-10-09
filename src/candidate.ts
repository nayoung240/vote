let candidateIdx: number = 2;
const voteData = new Map();

const addCandidate = () => {
    candidateIdx += 1;
    let candidateDiv = document.getElementById('canidateDiv');
    const addDiv: string = `<div class="mb-6">
                                <label for="input${candidateIdx}" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">후보${candidateIdx}</label>
                                <input type="text" id="input${candidateIdx}" name="input${candidateIdx}" class="candidate bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </div>`;
    candidateDiv.insertAdjacentHTML('beforeend', addDiv);
};

const submitBjVote = () => {
    const form = document.getElementById('candidateForm') as HTMLFormElement;
    const formData = new FormData(form);
    let isEmpty = true;

    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
        if(value) {
            voteData.set(value, 0);
            isEmpty = false;
        }
    });

    if(isEmpty) {
        const toast = document.getElementById('myToast');
      
        // 토스트 메시지 표시
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(0)';
    
        // 3초 후에 토스트 메시지 사라짐
        setTimeout(function () {
          toast.style.opacity = '0';
          toast.style.transform = 'translateX(-full)';
        }, 1500); // 1.5초
    }

    console.log('mymap', voteData)
};

const addBtn = document.getElementById("addBtn");
addBtn?.addEventListener("click", addCandidate);

const submitBtn = document.getElementById("submitBtn");
submitBtn?.addEventListener("click", submitBjVote);