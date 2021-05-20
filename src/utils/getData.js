const books = ["A Doll's House", "Absalom, Absalom!", "Anna Karenina", "Beloved", "Berlin Alexanderplatz", "Blindness", "Bostan", "Buddenbrooks", "Children of Gebelawi", "Confessions of Zeno", "Crime and Punishment", "Dead Souls", "Diary of a Madman", "Don Quijote De La Mancha", "Essays", "Fairy tales", "Faust", "Ficciones", "Gargantua and Pantagruel", "Great Expectations", "Gulliver's Travels", "Gypsy Ballads", "Hamlet", "History", "Hunger", "Iliad", "In Search of Lost Time", "Independent People", "Invisible Man", "Jacques the Fatalist", "Journey to the End of the Night", "King Lear", "Le Père Goriot", "Leaves of Grass", "Lolita", "Love in the Time of Cholera", "Madame Bovary", "Mahabharata", "Medea", "Memoirs of Hadrian", "Metamorphoses", "Middlemarch", "Midnight's Children", "Moby Dick", "Molloy, Malone Dies, The Unnamable, the trilogy", "Mrs Dalloway", "Nineteen Eighty-Four", "Njál's Saga", "Nostromo", "Odyssey", "Oedipus the King", "One Hundred Years of Solitude", "One Thousand and One Nights", "Othello", "Pedro Páramo", "Pippi Longstocking", "Poems", "Pride and Prejudice", "Ramayana", "Season of Migration to the North", "Sentimental Education", "Sons and Lovers", "Stories", "Tales", "The Adventures of Huckleberry Finn", "The Aeneid", "The Book Of Job", "The Book of Disquiet", "The Brothers Karamazov", "The Canterbury Tales", "The Castle", "The Death of Ivan Ilyich", "The Decameron", "The Devil to Pay in the Backlands", "The Divine Comedy", "The Epic Of Gilgamesh", "The Golden Notebook", "The Idiot", "The Life And Opinions of Tristram Shandy", "The Magic Mountain", "The Man Without Qualities", "The Masnavi", "The Old Man and the Sea", "The Possessed", "The Red and the Black", "The Sound and the Fury", "The Sound of the Mountain", "The Stranger", "The Tale of Genji", "The Tin Drum", "The Trial", "The recognition of Shakuntala", "Things Fall Apart", "To the Lighthouse", "Ulysses", "War and Peace", "Wuthering Heights", "Zorba the Greek"]

const returnRelevantResults = (query) => {
  const lowerCaseQuery = query.toLowerCase();

  const resultsArray = books.filter((bookName) => {
    const lowerCaseBookName = bookName.toLowerCase();
    const matchingBook = lowerCaseBookName.startsWith(lowerCaseQuery);
    return matchingBook;
  })

  return resultsArray;
}

const getData = (query) => {
  return new Promise((resolve, reject) => {
      const resultsArray = returnRelevantResults(query);
      const randomNumber = Math.random()*1000;
      setTimeout(() => { resolve(resultsArray)}, randomNumber);
  });
};

export default getData;
