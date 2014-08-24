'use strict';

/**
 * @ngdoc service
 * @name storycloudChallengeApp.filesystem
 * @description Holds the current filesystem of folders and files
 * # filesystem
 * Factory in the storycloudChallengeApp.
 */
angular.module('storycloudChallengeApp')
  .factory('filesystem', ['File', 'Folder', function (File, Folder) {
    
    //==========================================================================
    // DUMMY DATA ==============================================================
    //==========================================================================
    // For the challenge, just create some dummy data (from thegreatestbooks.org)
    // IRL, this would be pulled as a $resource from the API
    var data = [
      {
        folder: true,
        name: 'books',
        contents: [
          {
            title   : 'Ulysses',
            type    : 'mobi',
            created : '2 Feb 1922',
            creator : 'James Joyce',
            other   : 'Ulysses chronicles the passage of Leopold Bloom through Dublin during an ordinary day, June 16, 1904.'
          }, 
          {
            title   : 'Don Quixote',
            type    : 'epub',
            created : '1 Jan 1605',
            creator : 'Miguel de Cervantes',
            other   : 'Alonso Quixano, a retired country gentleman in his fifties, lives in an unnamed section of La Mancha with his niece and a housekeeper. He has become obsessed with books of chivalry.'
          },
          {
            title   : 'In Search of Lost Time',
            type    : 'azw',
            created : '1 Jan 1913',
            creator : 'Marcel Proust',
            other   : 'Swann\'s Way, the first part of A la recherche de temps perdu, Marcel Proust\'s seven-part cycle, was published in 1913. In it, Proust introduces the themes that run through the entire work.'
          },
          {
            title   : 'Moby-Dick',
            type    : 'mobi',
            created : '18 Oct 1851',
            creator : 'Herman Melville',
            other   : 'First published in 1851, Melville\'s masterpiece is, in Elizabeth Hardwick\'s words, "the greatest novel in American literature."'
          },
          {
            title   : 'Lolita',
            type    : 'epub',
            created : '1 Jan 1955',
            creator : 'Vladimir Nabokov',
            other   : 'The book is internationally famous for its innovative style and infamous for its controversial subject.'
          },
          {
            title   : 'Madame Bovary',
            type    : 'azw',
            created : '1 Jan 1857',
            creator : 'Gustave Flaubert',
            other   : 'For daring to peer into the heart of an adulteress and enumerate its contents with profound dispassion, the author of Madame Bovary was tried for "offenses against morality and religion."'
          },
          {
            title   : 'War and Peace',
            type    : 'mobi',
            created : '1 Jan 1869',
            creator : 'Leo Tolstoy',
            other   : 'Epic in scale, War and Peace delineates in graphic detail events leading up to Napoleon\'s invasion of Russia.'
          }
        ]
      },
     {
        folder: true,
        name: 'folder2',
        contents: [
          {
            title: 'File1',
            type: 'txt',
            created: '23 Aug 2014',
            creator: 'Bob',
            other: ''
          },
          {
            title: 'File2',
            type: 'txt',
            created: '22 Aug 2014',
            creator: 'Bob',
            other: ''
          },
          {
            title: 'File3',
            type: 'docx',
            created: '21 Aug 2014',
            creator: 'John',
            other: ''
          },
          {
            folder: true,
            name: 'folder3',
            contents: [
              {
                title: 'File4',
                type: 'txt',
                created: '23 Aug 2014',
                creator: 'Bob',
                other: ''
              },
              {
                title: 'File5',
                type: 'txt',
                created: '22 Aug 2014',
                creator: 'John',
                other: ''
              },
              {
                title: 'File6',
                type: 'docx',
                created: '21 Aug 2014',
                creator: 'John',
                other: ''
              }
            ]
          }
        ]
      }
    ];
  
    
      
     // A function to parse the data object into File and Folder objects
    function parseData(dataFolder, localFolder) {
      // Loop through folder
      for (var i = 0; i < dataFolder.length; i++) {

        // Check if the entry is a folder
        if (dataFolder[i].folder) {
          // if it's a folder:

          // Create the folder
          // Send in the flatfolders length, which is the index it will get
          var newFolder = new Folder(flatFolders.length, dataFolder[i].name);

          // Add the folder to the localFolder
          localFolder.create(newFolder);
          
          // Add the folder to the flatfolders array
          flatFolders.push(newFolder);

          // Recurse through this function to add the folder's contents
          parseData(dataFolder[i].contents, newFolder);
        } else {
          // If not a folder, it's a file

          // create the new file with all the attached attributes
          var newFile = new File(dataFolder[i]);

          // Add it to the localFolder
          localFolder.create(newFile);
        }
      }
    }
    
    // Create the base filesystem folder
    var filesystem = new Folder(0, 'filesystem'),
    // An array of folders, so they can be found via routes
    // With the filesystem as the first entry
        flatFolders = [filesystem];
    
    // Parse the data into the filesystem
    parseData(data, filesystem);
    
    // Return a ref to the filesystem and folder array
    return {
      tree: filesystem,
      folders: flatFolders
    };
  }]);
