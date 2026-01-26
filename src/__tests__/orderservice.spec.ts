import { OrderService } from "../orderservice";

// Stub

class InventoryServiceStub  {
    private inStock:boolean = true;
    setInStock(value:boolean){
        this.inStock = value;
    };
    // @ts-ignore
    checkStock(productId:string):boolean {
        return this.inStock
    }
}
// Fake
class FakePaymentGateway {
    private transactions:{amount:number, status:string}[] = [];
    processPayment(amount:number):string {
        this.transactions.push({amount, status:'success'});
        return `Processed Payment of $${amount}`;
    };
    getTransactions(): {amount:number, status:string}[] {
        return this.transactions;
    }

};

describe('OrderService', ()=>{
    it('process payment and calculate bonus points correctly when in stock', ()=>{
        const fakePaymentGateway = new FakePaymentGateway();
        const inventoryStub = new InventoryServiceStub();
        const orderService = new OrderService(fakePaymentGateway, inventoryStub);
        const result = orderService.checkout(100, 'PROD1234');
        expect(result).toBe('Processed Payment of $100 - Earned 10 bonus points');
        expect(fakePaymentGateway.getTransactions()).toEqual([{"amount": 100, "status": "success"}]);
    });
    it('order fails when product is out of stock', ()=>{
        const fakePaymentGateway = new FakePaymentGateway();
        const inventoryStub = new InventoryServiceStub();
        inventoryStub.setInStock(false);
        const orderService = new OrderService(fakePaymentGateway, inventoryStub);
        const result = orderService.checkout(100, 'PROD1234');
        expect(result).toBe('Order failed: product out of stock');
        expect(fakePaymentGateway.getTransactions()).toEqual([]);
    });
    it('handle decimal amounts correctly for bonus points',  ()=> {
        const fakePaymentGateway = new FakePaymentGateway();
        const inventoryStub = new InventoryServiceStub();
        const orderService = new OrderService(fakePaymentGateway, inventoryStub);
        const result = orderService.checkout(55.99, 'PROD1234');
         expect(result).toBe('Processed Payment of $55.99 - Earned 5 bonus points');
        expect(fakePaymentGateway.getTransactions()).toEqual([{"amount": 55.99, "status": "success"}]);
    })
});