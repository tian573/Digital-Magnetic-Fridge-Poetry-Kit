const wordBank = [
    // Nouns
    'love', 'heart', 'dream', 'soul', 'moon', 'sun', 'star', 'ocean', 'mountain', 'river',
    'flower', 'tree', 'bird', 'butterfly', 'rainbow', 'storm', 'fire', 'ice', 'wind', 'rain',
    'morning', 'night', 'shadow', 'light', 'darkness', 'silence', 'whisper', 'song', 'dance', 'journey',
    'path', 'door', 'window', 'mirror', 'book', 'word', 'story', 'memory', 'time', 'moment',
    'hand', 'eye', 'smile', 'tear', 'laugh', 'cry', 'voice', 'breath', 'life', 'death',
    'sky', 'cloud', 'thunder', 'lightning', 'snow', 'frost', 'mist', 'fog', 'earth', 'ground',
    'sand', 'stone', 'rock', 'crystal', 'pearl', 'diamond', 'gold', 'silver', 'copper', 'metal',
    'glass', 'paper', 'ink', 'pencil', 'pen', 'brush', 'paint', 'color', 'canvas', 'picture',
    'photograph', 'frame', 'wall', 'ceiling', 'floor', 'room', 'house', 'home', 'castle', 'tower',
    'bridge', 'road', 'street', 'highway', 'car', 'train', 'plane', 'ship', 'boat', 'bicycle',
    'horse', 'cat', 'dog', 'rabbit', 'mouse', 'lion', 'tiger', 'bear', 'wolf', 'fox',
    'eagle', 'dove', 'swan', 'crow', 'owl', 'fish', 'whale', 'dolphin', 'shark', 'turtle',
    'garden', 'forest', 'desert', 'island', 'valley', 'hill', 'field', 'meadow', 'lake', 'pond',
    'wave', 'tide', 'shore', 'beach', 'sand', 'shell', 'coral', 'seaweed', 'treasure', 'chest',
    'key', 'lock', 'chain', 'rope', 'thread', 'needle', 'cloth', 'silk', 'velvet', 'cotton',
    'wool', 'leather', 'fur', 'feather', 'wing', 'tail', 'paw', 'claw', 'horn', 'antler',
    'crown', 'ring', 'necklace', 'bracelet', 'earring', 'gem', 'jewel', 'ruby', 'emerald', 'sapphire',
    'music', 'melody', 'rhythm', 'beat', 'note', 'chord', 'harmony', 'symphony', 'opera', 'ballad',
    'poem', 'verse', 'rhyme', 'line', 'chapter', 'page', 'letter', 'message', 'secret', 'mystery',
    'magic', 'spell', 'potion', 'wand', 'crystal', 'fairy', 'angel', 'devil', 'ghost', 'spirit',
    'dragon', 'phoenix', 'unicorn', 'mermaid', 'wizard', 'witch', 'prince', 'princess', 'king', 'queen',
    'knight', 'sword', 'shield', 'armor', 'bow', 'arrow', 'spear', 'dagger', 'blade', 'weapon',
    'battle', 'war', 'peace', 'victory', 'defeat', 'honor', 'glory', 'fame', 'fortune', 'destiny',
    'fate', 'luck', 'chance', 'choice', 'decision', 'thought', 'idea', 'plan', 'goal', 'target',
    'aim', 'purpose', 'meaning', 'reason', 'cause', 'effect', 'result', 'consequence', 'outcome', 'end',
    'beginning', 'start', 'middle', 'center', 'edge', 'border', 'corner', 'side', 'top', 'bottom',
    'front', 'back', 'left', 'right', 'north', 'south', 'east', 'west', 'direction', 'compass',
    'map', 'guide', 'leader', 'follower', 'teacher', 'student', 'master', 'apprentice', 'friend', 'enemy',
    'stranger', 'neighbor', 'family', 'parent', 'child', 'baby', 'mother', 'father', 'sister', 'brother',
    'grandfather', 'grandmother', 'uncle', 'aunt', 'cousin', 'niece', 'nephew', 'husband', 'wife', 'lover',
    
    // Verbs
    'is', 'am', 'are', 'was', 'were', 'be', 'being', 'been', 'have', 'has', 'had',
    'do', 'does', 'did', 'will', 'would', 'could', 'should', 'can', 'may', 'might',
    'fly', 'run', 'walk', 'dance', 'sing', 'laugh', 'cry', 'smile', 'whisper', 'shout',
    'love', 'hate', 'want', 'need', 'hope', 'wish', 'dream', 'think', 'feel', 'know',
    'see', 'hear', 'touch', 'taste', 'smell', 'find', 'lose', 'keep', 'give', 'take',
    'make', 'create', 'build', 'destroy', 'break', 'fix', 'repair', 'heal', 'hurt', 'help',
    'save', 'rescue', 'protect', 'defend', 'attack', 'fight', 'battle', 'win', 'lose', 'compete',
    'play', 'work', 'rest', 'sleep', 'wake', 'rise', 'fall', 'jump', 'climb', 'crawl',
    'swim', 'dive', 'float', 'sink', 'sail', 'row', 'paddle', 'surf', 'ride', 'drive',
    'travel', 'journey', 'explore', 'discover', 'search', 'hunt', 'gather', 'collect', 'store', 'hide',
    'show', 'reveal', 'expose', 'cover', 'wrap', 'unwrap', 'open', 'close', 'lock', 'unlock',
    'push', 'pull', 'lift', 'carry', 'hold', 'grab', 'catch', 'throw', 'toss', 'drop',
    'pick', 'choose', 'select', 'decide', 'prefer', 'like', 'dislike', 'enjoy', 'suffer', 'endure',
    'survive', 'live', 'die', 'born', 'grow', 'age', 'mature', 'develop', 'change', 'transform',
    'become', 'turn', 'convert', 'switch', 'trade', 'exchange', 'share', 'divide', 'split', 'join',
    'connect', 'link', 'tie', 'bind', 'attach', 'detach', 'separate', 'apart', 'together', 'unite',
    'gather', 'meet', 'greet', 'welcome', 'invite', 'visit', 'stay', 'leave', 'depart', 'arrive',
    'enter', 'exit', 'escape', 'flee', 'chase', 'follow', 'lead', 'guide', 'direct', 'point',
    'show', 'teach', 'learn', 'study', 'practice', 'train', 'exercise', 'stretch', 'bend', 'twist',
    'turn', 'spin', 'rotate', 'roll', 'slide', 'slip', 'trip', 'stumble', 'balance', 'stand',
    'sit', 'lie', 'lean', 'kneel', 'bow', 'curtsy', 'wave', 'point', 'gesture', 'signal',
    'communicate', 'speak', 'talk', 'chat', 'discuss', 'argue', 'debate', 'agree', 'disagree', 'understand',
    'confuse', 'puzzle', 'solve', 'answer', 'question', 'ask', 'wonder', 'ponder', 'consider', 'contemplate',
    'meditate', 'reflect', 'remember', 'forget', 'recall', 'remind', 'memorize', 'learn', 'teach', 'explain',
    'describe', 'define', 'identify', 'recognize', 'notice', 'observe', 'watch', 'look', 'stare', 'glance',
    'peek', 'spy', 'examine', 'inspect', 'investigate', 'research', 'study', 'analyze', 'evaluate', 'judge',
    'criticize', 'praise', 'compliment', 'insult', 'blame', 'accuse', 'forgive', 'excuse', 'apologize', 'regret',
    'celebrate', 'party', 'feast', 'dine', 'eat', 'drink', 'swallow', 'chew', 'bite', 'lick',
    'taste', 'savor', 'enjoy', 'relish', 'appreciate', 'value', 'treasure', 'cherish', 'adore', 'worship',
    
    // Adjectives
    'beautiful', 'ugly', 'pretty', 'handsome', 'cute', 'lovely', 'amazing', 'wonderful', 'terrible', 'awful',
    'big', 'small', 'large', 'tiny', 'huge', 'little', 'tall', 'short', 'long', 'wide',
    'hot', 'cold', 'warm', 'cool', 'bright', 'dark', 'light', 'heavy', 'soft', 'hard',
    'fast', 'slow', 'quick', 'lazy', 'busy', 'quiet', 'loud', 'silent', 'peaceful', 'chaotic',
    'happy', 'sad', 'angry', 'calm', 'excited', 'bored', 'tired', 'fresh', 'old', 'new',
    'young', 'ancient', 'modern', 'traditional', 'classic', 'vintage', 'antique', 'contemporary', 'future', 'past',
    'present', 'current', 'recent', 'distant', 'close', 'near', 'far', 'remote', 'local', 'foreign',
    'strange', 'familiar', 'weird', 'normal', 'unusual', 'common', 'rare', 'unique', 'special', 'ordinary',
    'extraordinary', 'remarkable', 'outstanding', 'excellent', 'perfect', 'flawless', 'imperfect', 'broken', 'damaged', 'whole',
    'complete', 'incomplete', 'finished', 'unfinished', 'ready', 'prepared', 'unprepared', 'organized', 'messy', 'clean',
    'dirty', 'pure', 'innocent', 'guilty', 'honest', 'dishonest', 'truthful', 'false', 'real', 'fake',
    'genuine', 'artificial', 'natural', 'synthetic', 'organic', 'chemical', 'poisonous', 'toxic', 'safe', 'dangerous',
    'risky', 'secure', 'protected', 'vulnerable', 'strong', 'weak', 'powerful', 'powerless', 'mighty', 'gentle',
    'fierce', 'wild', 'tame', 'domestic', 'savage', 'civilized', 'polite', 'rude', 'kind', 'cruel',
    'mean', 'nice', 'friendly', 'hostile', 'aggressive', 'passive', 'active', 'energetic', 'lethargic', 'vibrant',
    'dull', 'boring', 'interesting', 'fascinating', 'captivating', 'enchanting', 'magical', 'mystical', 'mysterious', 'obvious',
    'hidden', 'secret', 'private', 'public', 'personal', 'professional', 'casual', 'formal', 'elegant', 'simple',
    'complex', 'complicated', 'easy', 'difficult', 'hard', 'challenging', 'impossible', 'possible', 'probable', 'unlikely',
    'certain', 'uncertain', 'sure', 'unsure', 'confident', 'nervous', 'brave', 'cowardly', 'bold', 'shy',
    'outgoing', 'introverted', 'social', 'antisocial', 'popular', 'unpopular', 'famous', 'unknown', 'celebrated', 'forgotten',
    'memorable', 'forgettable', 'important', 'unimportant', 'significant', 'insignificant', 'major', 'minor', 'primary', 'secondary',
    'first', 'last', 'final', 'initial', 'original', 'copied', 'duplicate', 'single', 'multiple', 'many',
    'few', 'several', 'numerous', 'countless', 'infinite', 'limited', 'unlimited', 'boundless', 'restricted', 'free',
    'liberal', 'conservative', 'radical', 'moderate', 'extreme', 'mild', 'intense', 'severe', 'harsh', 'gentle',
    'smooth', 'rough', 'bumpy', 'flat', 'curved', 'straight', 'crooked', 'bent', 'twisted', 'tangled',
    'loose', 'tight', 'narrow', 'broad', 'thick', 'thin', 'dense', 'sparse', 'crowded', 'empty',
    'full', 'hollow', 'solid', 'liquid', 'frozen', 'melted', 'boiling', 'steaming', 'smoking', 'burning',
    'glowing', 'shining', 'sparkling', 'twinkling', 'flickering', 'fading', 'brightening', 'dimming', 'colorful', 'colorless',
    'transparent', 'opaque', 'clear', 'cloudy', 'foggy', 'misty', 'sunny', 'rainy', 'snowy', 'stormy',
    'windy', 'calm', 'still', 'moving', 'flowing', 'rushing', 'crawling', 'creeping', 'sliding', 'rolling',
    
    // Prepositions & Articles
    'the', 'a', 'an', 'in', 'on', 'at', 'by', 'for', 'with', 'without',
    'under', 'over', 'above', 'below', 'beside', 'between', 'through', 'around', 'near', 'far',
    'to', 'from', 'into', 'onto', 'across', 'along', 'up', 'down', 'out', 'inside',
    'outside', 'within', 'beyond', 'behind', 'before', 'after', 'during', 'throughout', 'against', 'toward',
    'towards', 'until', 'since', 'despite', 'except', 'including', 'excluding', 'regarding', 'concerning', 'about',
    'among', 'amongst', 'amid', 'amidst', 'beneath', 'underneath', 'upon', 'atop', 'off', 'via',
    
    // Pronouns & Others
    'I', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her',
    'us', 'them', 'my', 'your', 'his', 'her', 'its', 'our', 'their', 'mine',
    'yours', 'ours', 'theirs', 'myself', 'yourself', 'himself', 'herself', 'itself', 'ourselves', 'themselves',
    'this', 'that', 'these', 'those', 'here', 'there', 'where', 'everywhere', 'nowhere', 'somewhere',
    'anywhere', 'when', 'whenever', 'while', 'until', 'since', 'before', 'after', 'during', 'meanwhile',
    'how', 'why', 'what', 'who', 'whom', 'whose', 'which', 'whichever', 'whatever', 'whoever',
    'and', 'or', 'but', 'so', 'yet', 'nor', 'for', 'because', 'since', 'as',
    'if', 'unless', 'whether', 'though', 'although', 'even', 'still', 'just', 'only', 'also',
    'too', 'very', 'quite', 'rather', 'fairly', 'pretty', 'really', 'truly', 'absolutely', 'completely',
    'totally', 'entirely', 'wholly', 'partially', 'partly', 'somewhat', 'slightly', 'barely', 'hardly', 'scarcely',
    'almost', 'nearly', 'practically', 'virtually', 'essentially', 'basically', 'fundamentally', 'generally', 'usually', 'normally',
    'typically', 'commonly', 'frequently', 'often', 'sometimes', 'occasionally', 'rarely', 'seldom', 'never', 'always',
    'forever', 'eternally', 'constantly', 'continuously', 'repeatedly', 'again', 'once', 'twice', 'thrice', 'multiple',
    'now', 'then', 'soon', 'later', 'earlier', 'recently', 'previously', 'formerly', 'currently', 'presently',
    'today', 'tomorrow', 'yesterday', 'tonight', 'morning', 'afternoon', 'evening', 'midnight', 'noon', 'dawn',
    'dusk', 'sunrise', 'sunset', 'twilight', 'daybreak', 'nightfall', 'yes', 'no', 'maybe', 'perhaps',
    'possibly', 'probably', 'definitely', 'certainly', 'surely', 'obviously', 'clearly', 'apparently', 'seemingly', 'supposedly'
];

let draggedElement = null;
let magnetCounter = 0;

let touchStartX = 0;
let touchStartY = 0;
let touchOffsetX = 0;
let touchOffsetY = 0;
let isDragging = false;
let draggedClone = null;

function init() {
    setupFridge();
    setupWordTray(); 
    populateWordTray();
    showInstructions();
    setupMobileSupport(); 
}

function showInstructions() {
    const instructions = document.getElementById('instructions');

    setTimeout(() => {
        instructions.classList.add('pop-in');
    }, 500);

    setTimeout(() => {
        instructions.classList.add('pop-out');

        setTimeout(() => {
            instructions.style.display = 'none';
        }, 600);
    }, 15000);
}

function setupFridge() {
    const fridge = document.getElementById('fridge');

    fridge.addEventListener('dragover', handleDragOver);
    fridge.addEventListener('drop', handleFridgeDrop);
    fridge.addEventListener('dragenter', handleDragEnter);
    fridge.addEventListener('dragleave', handleDragLeave);
}

function setupWordTray() {
    const wordTray = document.getElementById('wordTray');

    wordTray.addEventListener('dragover', handleDragOver);
    wordTray.addEventListener('drop', handleTrayDrop);
    wordTray.addEventListener('dragenter', handleTrayDragEnter);
    wordTray.addEventListener('dragleave', handleTrayDragLeave);
}

function populateWordTray() {
    const tray = document.getElementById('wordTray');
    tray.innerHTML = '';

    const selectedWords = getRandomWords(30);
    
    selectedWords.forEach(word => {
        const magnet = createWordMagnet(word);
        tray.appendChild(magnet);
    });
}

function getRandomWords(count) {
    const shuffled = [...wordBank].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function createWordMagnet(word) {
    const magnet = document.createElement('div');
    magnet.className = 'word-magnet';
    magnet.textContent = word;
    magnet.draggable = true;
    magnet.id = `magnet-${magnetCounter++}`;

    magnet.addEventListener('dragstart', handleDragStart);
    magnet.addEventListener('dragend', handleDragEnd);

    magnet.addEventListener('touchstart', handleTouchStart, { passive: false });
    magnet.addEventListener('touchmove', handleTouchMove, { passive: false });
    magnet.addEventListener('touchend', handleTouchEnd, { passive: false });
    
    return magnet;
}

function handleDragStart(e) {
    draggedElement = e.target;
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.outerHTML);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
    e.preventDefault();
    document.getElementById('fridge').classList.add('drag-over');
}

function handleDragLeave(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
        document.getElementById('fridge').classList.remove('drag-over');
    }
}

function handleTrayDragEnter(e) {
    e.preventDefault();
    document.getElementById('wordTray').classList.add('drag-over');
}

function handleTrayDragLeave(e) {
    if (!e.currentTarget.contains(e.relatedTarget)) {
        document.getElementById('wordTray').classList.remove('drag-over');
    }
}

function handleTrayDrop(e) {
    e.preventDefault();
    document.getElementById('wordTray').classList.remove('drag-over');
    
    if (draggedElement && draggedElement.classList.contains('on-fridge')) {
        draggedElement.remove();
        draggedElement = null;
    }
}

function handleFridgeDrop(e) {
    e.preventDefault();
    document.getElementById('fridge').classList.remove('drag-over');
    
    if (draggedElement) {
        const fridge = document.getElementById('fridge');
        const rect = fridge.getBoundingClientRect();

        let x = e.clientX - rect.left - 20;
        let y = e.clientY - rect.top - 15;

        x = Math.round(x / 40) * 40;
        y = Math.round(y / 30) * 30;

        x = Math.max(0, Math.min(x, rect.width - 80));
        y = Math.max(0, Math.min(y, rect.height - 30));

        let newMagnet;
        let isNewPlacement = false;
        
        if (draggedElement.classList.contains('on-fridge')) {
            newMagnet = draggedElement;
        } else {
            newMagnet = draggedElement.cloneNode(true);
            newMagnet.classList.add('on-fridge');
            isNewPlacement = true;

            newMagnet.addEventListener('dblclick', function() {
                const magnetRect = this.getBoundingClientRect();
                const fridgeRect = document.getElementById('fridge').getBoundingClientRect();
                const particleX = magnetRect.left - fridgeRect.left + magnetRect.width / 2;
                const particleY = magnetRect.top - fridgeRect.top + magnetRect.height / 2;

                createParticleEffect(magnetRect.left + magnetRect.width / 2, magnetRect.top + magnetRect.height / 2, 'remove');
                
                this.remove();
            });
            
            let tapCount = 0;
            let tapTimer;
            newMagnet.addEventListener('touchend', function(e) {
                if (e.touches.length === 0) { 
                    tapCount++;
                    if (tapCount === 1) {
                        tapTimer = setTimeout(() => {
                            tapCount = 0;
                        }, 300);
                    } else if (tapCount === 2) {
                        clearTimeout(tapTimer);
                        tapCount = 0;
                        const magnetRect = this.getBoundingClientRect();
                        createParticleEffect(magnetRect.left + magnetRect.width / 2, magnetRect.top + magnetRect.height / 2, 'remove');
                        this.remove();
                    }
                }
            });
            
            newMagnet.addEventListener('dragstart', handleDragStart);
            newMagnet.addEventListener('dragend', handleDragEnd);
            
            newMagnet.addEventListener('touchstart', handleTouchStart, { passive: false });
            newMagnet.addEventListener('touchmove', handleTouchMove, { passive: false });
            newMagnet.addEventListener('touchend', handleTouchEnd, { passive: false });
        }

        newMagnet.style.left = x + 'px';
        newMagnet.style.top = y + 'px';

        if (!draggedElement.classList.contains('on-fridge')) {
            fridge.appendChild(newMagnet);
        }

        if (isNewPlacement) {
            const magnetRect = newMagnet.getBoundingClientRect();
            createParticleEffect(magnetRect.left + magnetRect.width / 2, magnetRect.top + magnetRect.height / 2, 'place');
        }
        
        draggedElement = null;
    }
}

function shuffleWords() {
    populateWordTray();
}

const modalCSS = `
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    opacity: 0;
    transition: opacity 0.3s ease;
    backdrop-filter: blur(5px);
}

.modal-overlay.show {
    opacity: 1;
}

.modal {
    background: linear-gradient(145deg, #2F1B14, #3D2517);
    border: 3px solid #8B4513;
    border-radius: 15px;
    padding: 30px;
    max-width: 400px;
    width: 90%;
    box-shadow: 
        0 15px 35px rgba(0,0,0,0.6),
        inset 0 1px 0 rgba(245, 222, 179, 0.2);
    transform: scale(0.7) translateY(-50px);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    color: #F5DEB3;
    text-align: center;
}

.modal-overlay.show .modal {
    transform: scale(1) translateY(0);
}

.modal h3 {
    margin-bottom: 20px;
    color: #DEB887;
    font-family: 'Georgia', serif;
    font-size: 1.4em;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.modal p {
    margin-bottom: 25px;
    line-height: 1.5;
    color: #F5DEB3;
    font-size: 16px;
}

.modal-buttons {
    display: flex;
    gap: 15px;
    justify-content: center;
}

.modal-btn {
    padding: 12px 24px;
    border: 2px solid;
    border-radius: 8px;
    font-weight: bold;
    font-family: 'Georgia', serif;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 14px;
    min-width: 100px;
}

.modal-btn.confirm {
    background: linear-gradient(145deg, #DC143C, #B22222);
    border-color: #8B0000;
    color: #FFE4E1;
    box-shadow: 0 3px 6px rgba(0,0,0,0.3);
}

.modal-btn.confirm:hover {
    background: linear-gradient(145deg, #FF1493, #DC143C);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.4);
}

.modal-btn.cancel {
    background: linear-gradient(145deg, #8B4513, #A0522D);
    border-color: #654321;
    color: #F5DEB3;
    box-shadow: 0 3px 6px rgba(0,0,0,0.3);
}

.modal-btn.cancel:hover {
    background: linear-gradient(145deg, #A0522D, #D2B48C);
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.4);
}

.modal-btn:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

@media (max-width: 480px) {
    .modal {
        padding: 20px;
        max-width: 320px;
    }
    
    .modal h3 {
        font-size: 1.2em;
    }
    
    .modal p {
        font-size: 14px;
    }
    
    .modal-buttons {
        flex-direction: column;
        gap: 10px;
    }
    
    .modal-btn {
        padding: 10px 20px;
        font-size: 13px;
    }
}
`;

function addModalCSS() {
    if (!document.getElementById('modal-styles')) {
        const style = document.createElement('style');
        style.id = 'modal-styles';
        style.textContent = modalCSS;
        document.head.appendChild(style);
    }
}

function showCustomModal(title, message, onConfirm, onCancel) {
    addModalCSS();

    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) {
        existingModal.remove();
    }

    const modalHTML = `
        <div class="modal-overlay" id="customModal">
            <div class="modal">
                <h3>${title}</h3>
                <p>${message}</p>
                <div class="modal-buttons">
                    <button class="modal-btn cancel" onclick="hideCustomModal(false)">Cancel</button>
                    <button class="modal-btn confirm" onclick="hideCustomModal(true)">Reset Fridge</button>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    window.modalCallbacks = { onConfirm, onCancel };

    const modal = document.getElementById('customModal');
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function hideCustomModal(confirmed) {
    const modal = document.getElementById('customModal');
    if (!modal) return;
    
    modal.classList.remove('show');
    
    setTimeout(() => {
        modal.remove();

        if (window.modalCallbacks) {
            if (confirmed && window.modalCallbacks.onConfirm) {
                window.modalCallbacks.onConfirm();
            } else if (!confirmed && window.modalCallbacks.onCancel) {
                window.modalCallbacks.onCancel();
            }
            window.modalCallbacks = null;
        }
    }, 300);
}

function resetFridge() {
    const fridge = document.getElementById('fridge');
    const magnetsOnFridge = fridge.querySelectorAll('.word-magnet.on-fridge');
    
    if (magnetsOnFridge.length === 0) {
        showCustomModal(
            'Already Empty!',
            'The fridge is already empty! Add some word magnets first to create your poetry.',
            null, 
            null  
        );

        setTimeout(() => {
            hideCustomModal(false);
        }, 2000);
        return;
    }

    showCustomModal(
        '⚠️ Reset Confirmation',
        'Are you sure you want to reset the fridge? This will remove all magnets from the fridge and cannot be undone.',
        function() {
            performReset(magnetsOnFridge);
        },
        function() {
            console.log('Reset cancelled by user');
        }
    );
}

function performReset(magnetsOnFridge) {
    const animations = ['dissolve', 'fly-away', 'implode', 'vaporize'];
    
    magnetsOnFridge.forEach((magnet, index) => {
        const delay = index * 150;
        
        setTimeout(() => {
            const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
            
            magnet.classList.add('magnet-removing', randomAnimation);
            
            const magnetRect = magnet.getBoundingClientRect();
            createParticleEffect(
                magnetRect.left + magnetRect.width / 2, 
                magnetRect.top + magnetRect.height / 2, 
                'remove'
            );
            
            const animationDuration = randomAnimation === 'fly-away' ? 1200 : 
                                    randomAnimation === 'vaporize' ? 1000 : 
                                    randomAnimation === 'dissolve' ? 800 : 600;
            
            setTimeout(() => {
                if (magnet.parentNode) {
                    magnet.remove();
                }
            }, animationDuration);
            
        }, delay);
    });
}

function savePoem() {
    const fridgeContainer = document.querySelector('.fridge-container');

    const instructions = document.getElementById('instructions');
    const wasInstructionsVisible = instructions && instructions.style.display !== 'none';
    if (wasInstructionsVisible) {
        instructions.style.display = 'none';
    }

    html2canvas(fridgeContainer, {
        backgroundColor: null,
        scale: 1.5, 
        useCORS: true,
        allowTaint: true,
        width: fridgeContainer.offsetWidth,
        height: fridgeContainer.offsetHeight,
        scrollX: 0,
        scrollY: 0
    }).then(canvas => {
        if (wasInstructionsVisible) {
            instructions.style.display = 'block';
        }

        const link = document.createElement('a');
        const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
        link.download = `magnetic-poem-${timestamp}.png`;
        link.href = canvas.toDataURL('image/png', 0.9);
        link.click();
        link.remove();
    }).catch(error => {
        console.error('Error capturing image:', error);

        if (wasInstructionsVisible) {
            instructions.style.display = 'block';
        }
        
        alert('Failed to save image. Please try again.');
    });
}

function setupMobileSupport() {
    document.addEventListener('touchmove', function(e) {
        if (isDragging) {
            e.preventDefault();
        }
    }, { passive: false });

    document.addEventListener('touchend', function(e) {
        if (isDragging && draggedClone) {
            cleanupDraggedClone();
        }
    });
}

function handleTouchStart(e) {
    e.preventDefault();
    const touch = e.touches[0];
    const element = e.target;

    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    
    const rect = element.getBoundingClientRect();
    touchOffsetX = touch.clientX - rect.left;
    touchOffsetY = touch.clientY - rect.top;

    draggedElement = element;

    element.classList.add('dragging');

    createDraggedClone(element, touch.clientX, touch.clientY);
}

function handleTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    
    if (!isDragging && draggedElement) {
        const deltaX = Math.abs(touch.clientX - touchStartX);
        const deltaY = Math.abs(touch.clientY - touchStartY);
        
        if (deltaX > 5 || deltaY > 5) {
            isDragging = true;
            if (draggedClone) {
                draggedClone.style.opacity = '0.9';
            }
        }
    }
    
    if (isDragging && draggedClone) {
        draggedClone.style.left = (touch.clientX - touchOffsetX) + 'px';
        draggedClone.style.top = (touch.clientY - touchOffsetY) + 'px';

        const elementBelow = getElementBelow(touch.clientX, touch.clientY);
        updateDragOverEffects(elementBelow);
    }
}

function handleTouchEnd(e) {
    e.preventDefault();
    
    if (isDragging && draggedElement) {
        const touch = e.changedTouches[0];
        const elementBelow = getElementBelow(touch.clientX, touch.clientY);

        if (elementBelow) {
            if (elementBelow.id === 'fridge' || elementBelow.closest('#fridge')) {
                handleMobileFridgeDrop(touch.clientX, touch.clientY);
            } else if (elementBelow.id === 'wordTray' || elementBelow.closest('#wordTray')) {
                handleMobileTrayDrop();
            }
        }
    }

    if (draggedElement) {
        draggedElement.classList.remove('dragging');
    }
    
    cleanupDraggedClone();
    resetDragState();
    clearDragOverEffects();
}

function createDraggedClone(element, x, y) {
    draggedClone = element.cloneNode(true);
    draggedClone.style.position = 'fixed';
    draggedClone.style.left = (x - touchOffsetX) + 'px';
    draggedClone.style.top = (y - touchOffsetY) + 'px';
    draggedClone.style.zIndex = '9999';
    draggedClone.style.pointerEvents = 'none';
    draggedClone.style.opacity = '0.7';
    draggedClone.style.transform = 'rotate(2deg) scale(1.05)';
    draggedClone.classList.add('dragging');
    
    document.body.appendChild(draggedClone);
}

function cleanupDraggedClone() {
    if (draggedClone && draggedClone.parentNode) {
        draggedClone.parentNode.removeChild(draggedClone);
    }
    draggedClone = null;
}

function resetDragState() {
    draggedElement = null;
    isDragging = false;
    touchStartX = 0;
    touchStartY = 0;
    touchOffsetX = 0;
    touchOffsetY = 0;
}

function getElementBelow(x, y) {
    if (draggedClone) {
        draggedClone.style.pointerEvents = 'none';
    }
    const element = document.elementFromPoint(x, y);
    if (draggedClone) {
        draggedClone.style.pointerEvents = 'auto';
    }
    return element;
}

function updateDragOverEffects(elementBelow) {
    clearDragOverEffects();

    if (elementBelow) {
        if (elementBelow.id === 'fridge' || elementBelow.closest('#fridge')) {
            document.getElementById('fridge').classList.add('drag-over');
        } else if (elementBelow.id === 'wordTray' || elementBelow.closest('#wordTray')) {
            document.getElementById('wordTray').classList.add('drag-over');
        }
    }
}

function clearDragOverEffects() {
    document.getElementById('fridge').classList.remove('drag-over');
    document.getElementById('wordTray').classList.remove('drag-over');
}

function handleMobileFridgeDrop(clientX, clientY) {
    const fridge = document.getElementById('fridge');
    const rect = fridge.getBoundingClientRect();

    let x = clientX - rect.left - touchOffsetX;
    let y = clientY - rect.top - touchOffsetY;

    x = Math.round(x / 40) * 40;
    y = Math.round(y / 30) * 30;

    x = Math.max(0, Math.min(x, rect.width - 80));
    y = Math.max(0, Math.min(y, rect.height - 30));
    
    let newMagnet;
    let isNewPlacement = false;
    
    if (draggedElement.classList.contains('on-fridge')) {
        newMagnet = draggedElement;
    } else {
        newMagnet = draggedElement.cloneNode(true);
        newMagnet.classList.add('on-fridge');
        isNewPlacement = true;

        let tapCount = 0;
        let tapTimer;
        newMagnet.addEventListener('touchend', function(e) {
            if (e.touches.length === 0) {
                tapCount++;
                if (tapCount === 1) {
                    tapTimer = setTimeout(() => {
                        tapCount = 0;
                    }, 300);
                } else if (tapCount === 2) {
                    clearTimeout(tapTimer);
                    tapCount = 0;
                    const magnetRect = this.getBoundingClientRect();
                    createParticleEffect(magnetRect.left + magnetRect.width / 2, magnetRect.top + magnetRect.height / 2, 'remove');
                    this.remove();
                }
            }
        });

        newMagnet.addEventListener('dragstart', handleDragStart);
        newMagnet.addEventListener('dragend', handleDragEnd);

        newMagnet.addEventListener('touchstart', handleTouchStart, { passive: false });
        newMagnet.addEventListener('touchmove', handleTouchMove, { passive: false });
        newMagnet.addEventListener('touchend', handleTouchEnd, { passive: false });
    }

    newMagnet.style.left = x + 'px';
    newMagnet.style.top = y + 'px';

    if (!draggedElement.classList.contains('on-fridge')) {
        fridge.appendChild(newMagnet);
    }

    if (isNewPlacement) {
        const magnetRect = newMagnet.getBoundingClientRect();
        createParticleEffect(magnetRect.left + magnetRect.width / 2, magnetRect.top + magnetRect.height / 2, 'place');
    }
}

function handleMobileTrayDrop() {
    if (draggedElement && draggedElement.classList.contains('on-fridge')) {
        draggedElement.remove();
    }
}

document.addEventListener('DOMContentLoaded', init);

function createParticleEffect(x, y, type = 'place') {
    const particleCount = type === 'place' ? 8 : 12;
    const particles = [];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = `particle ${type}-particle`;
        
        const size = Math.random() * 8 + 4;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';

        const angle = (i / particleCount) * 2 * Math.PI;
        const distance = Math.random() * 50 + 30;
        const offsetX = Math.cos(angle) * distance;
        const offsetY = Math.sin(angle) * distance;

        const delay = Math.random() * 200;
        particle.style.animationDelay = delay + 'ms';

        particle.style.setProperty('--end-x', offsetX + 'px');
        particle.style.setProperty('--end-y', offsetY + 'px');
        
        document.body.appendChild(particle);
        particles.push(particle);

        setTimeout(() => {
            if (particle.parentNode) {
                particle.parentNode.removeChild(particle);
            }
        }, 1000 + delay);
    }
}

const additionalCSS = `
@keyframes placeParticle {
    0% {
        transform: scale(0) translate(0, 0) rotate(0deg);
        opacity: 1;
    }
    50% {
        transform: scale(1.2) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5)) rotate(180deg);
        opacity: 0.8;
    }
    100% {
        transform: scale(0.3) translate(var(--end-x), var(--end-y)) rotate(360deg);
        opacity: 0;
    }
}

@keyframes removeParticle {
    0% {
        transform: scale(1) translate(0, 0) rotate(0deg);
        opacity: 1;
    }
    50% {
        transform: scale(1.5) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5)) rotate(-180deg);
        opacity: 0.6;
    }
    100% {
        transform: scale(0) translate(var(--end-x), var(--end-y)) rotate(-360deg);
        opacity: 0;
    }
}
`;

const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);