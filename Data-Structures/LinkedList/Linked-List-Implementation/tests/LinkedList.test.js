const LinkedList = require("../LinkedList");


    //add test
    test("Adding a node to the end of the linked list",()=>{
        const list = new LinkedList()
        list.add(4)
        list.add(8)
        list.add(12)

        expect(list.head.data).toBe(4)
        expect(list.head.next.data).toBe(8)
        expect(list.head.next.next.data).toBe(12)
    })
  
    //remove test
    test("Removing node based on a specific data",()=>{
        const list = new LinkedList();
        const emptyList = new LinkedList();
        list.add(5);
        list.add(10);
        list.remove(10);
        expect(list.head.data).toBe(5);

        // empty list
        expect(emptyList.remove(10)).toBe(false);
    })

    //includes test
    test("includes check",()=>{
        const list = new LinkedList();
        list.add(25);
        expect(list.includes(25)).toBe(true);
        expect(list.includes(30)).toBe(false);

    })

    //insertAt test
    test("inserting a node at specific index",()=>{
        const list = new LinkedList();
        list.add(6)
        list.add(18)
        list.insertAt(12,1)
        expect(list.head.next.data).toBe(12);
        expect(list.insertAt(20,4)).toBe(false);
    })