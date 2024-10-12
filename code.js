let balance = 55000;

document.getElementById('balance').textContent = balance + " BDT";

document.getElementById('hisBtn').addEventListener('click', function() {
    document.getElementById('donation1').classList.add('hidden');
    document.getElementById('donation2').classList.add('hidden');
    document.getElementById('donation3').classList.add('hidden');
    
    document.getElementById('history').classList.remove('hidden');
    
    toggleActive(this, 'donationBtn');
});

document.getElementById('donationBtn').addEventListener('click', function() {

    document.getElementById('donation1').classList.remove('hidden');
    document.getElementById('donation2').classList.remove('hidden');
    document.getElementById('donation3').classList.remove('hidden');
    
    document.getElementById('history').classList.add('hidden');
    
    toggleActive(this, 'hisBtn');
});

function toggleActive(activeBtn, inactiveBtnId) {
    activeBtn.classList.add('bg-green-700');
    activeBtn.classList.remove('bg-green-500');
    
    const inactiveBtn = document.getElementById(inactiveBtnId);
    inactiveBtn.classList.remove('bg-green-700');
    inactiveBtn.classList.add('bg-green-500');
}

function donate(cardId, currentDonation) {
    const donationAmountInput = document.getElementById('donationAmount' + cardId);
    const donationAmount = parseInt(donationAmountInput.value);

    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please Enter a Valid Donation Amount.');
        return;
    }

    if (donationAmount > balance) {
        alert('Insufficient Balance.');
        return;
    }


    balance =balance-donationAmount;
    document.getElementById('balance').textContent = balance + " BDT";
    const currentDonationElem = document.getElementById('currentDonation' + cardId);
    const newDonationAmount = currentDonation + donationAmount;
    currentDonationElem.textContent = newDonationAmount + " BDT";

    addToHistory(donationAmount, cardId);

    openModal();

    donationAmountInput.value = '';
}

function addToHistory(donationAmount, cardId) {
    const historyList = document.getElementById('List');
    
    const historyItem = document.createElement('li');
    historyItem.classList.add('bg-white', 'p-4', 'shadow', 'rounded', 'my-4', 'text-center'); 
    
    const date = new Date();
    
    const donationNames = ['famine-2024 at Noakhali, Bangladesh','famine-2024 at Feni, Bangladesh','Aid for Injured in the Quota Movement'];
    historyItem.innerHTML =`${donationAmount} Taka is Donated for ${donationNames[cardId - 1]}<br>Date:${date}`;
    
    historyList.appendChild(historyItem);
}

function openModal() {
    document.getElementById('modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}
