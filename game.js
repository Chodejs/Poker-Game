// Designed with love by Chris and Emma

// ============================================================================
// CLASS: Card
// Represents a single playing card with a suit and a rank.
// ============================================================================
class Card {
  /**
   * Creates a new card instance.
   * @param {string} suit - The suit of the card (e.g., 'Hearts', 'Spades').
   * @param {string} rank - The rank of the card (e.g., 'A', 'K', '7').
   */
  constructor(suit, rank) {
    this.suit = suit;
    this.rank = rank;
  }

  /**
   * Returns a user-friendly string representation of the card.
   * e.g., "Ace of Spades"
   * @returns {string} The full name of the card.
   */
  toString() {
    // We'll add more descriptive names later, but for now, "A of Spades" is perfect.
    return `${this.rank} of ${this.suit}`;
  }
}


// ============================================================================
// CLASS: Deck
// Represents a full 52-card deck.
// ============================================================================
class Deck {
  constructor() {
    this.cards = [];
    this.createDeck();
  }

  /**
   * Populates the deck with 52 standard playing cards.
   * This is called by the constructor.
   */
  createDeck() {
    const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

    // Use nested loops to create every combination of suit and rank
    for (const suit of suits) {
      for (const rank of ranks) {
        // 'this' refers to the Deck instance we are currently inside of.
        // We are pushing a new Card object into this Deck's 'cards' array.
        this.cards.push(new Card(suit, rank));
      }
    }
  }

  /**
   * Shuffles the deck in place using the Fisher-Yates (aka Knuth) shuffle algorithm.
   * This is the gold standard for a truly random shuffle. It works by iterating
   * backwards through the array and swapping each element with one before it.
   */
  shuffle() {
    // We start at the end of the array and go backwards.
    for (let i = this.cards.length - 1; i > 0; i--) {
      // Pick a random index from the beginning of the array up to the current index.
      const j = Math.floor(Math.random() * (i + 1));
      
      // Perform a classic swap using array destructuring.
      // This is a modern, clean way to swap two array elements.
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    console.log("The deck has been thoroughly shuffled.");
  }

  /**
   * Deals one card from the top of the deck.
   * @returns {Card} The card object that was removed from the deck.
   */
  deal() {
    // The pop() method removes the last element from an array and returns it.
    // Since we shuffled, the "last" element is as random as any other.
    return this.cards.pop();
  }
}


// ============================================================================
// --- TEST ZONE ---
// This is where we can test our classes to make sure they work.
// ============================================================================

// 1. Create a new instance of our Deck class.
const myDeck = new Deck();

// 2. We can see the first card of the ordered deck.
console.log("The top card of the new, ordered deck is:", myDeck.cards[myDeck.cards.length - 1].toString());

// 3. Now, let's shuffle it up!
myDeck.shuffle();

// 4. Deal a couple of hands for a game of Texas Hold 'em.
console.log("\n--- Dealing a new hand ---");
const player1Hand = [myDeck.deal(), myDeck.deal()];
const player2Hand = [myDeck.deal(), myDeck.deal()];

// 5. Log the hands to the console to see the results.
console.log("Player 1's Hand:", player1Hand.map(card => card.toString()));
console.log("Player 2's Hand:", player2Hand.map(card => card.toString()));
console.log(`There are ${myDeck.cards.length} cards left in the deck.`);
