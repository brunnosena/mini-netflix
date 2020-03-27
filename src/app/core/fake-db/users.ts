export class UsersFakeDb {
    public static users = [
        {
            'id': '15459251a6d6b397565',
            'user': 'e5f001',
            'pass': '123',
            'name': 'Jack Smith',
            'avatar': '/assets/images/user1.png'
        },
        {
            'id': '154588a0864d2881124',
            'user': 'ept001',
            'pass': '456',
            'name': 'Paul Ryan',
            'avatar': '/assets/images/user2.png'
        }
    ];

    public static favourites = [
        {
            'id': '15459251a6d6b397565',
            'fav': []
        },
        {
            'id': '154588a0864d2881124',
            'fav': []
        }
    ];
}
