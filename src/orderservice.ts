// Real Payment Gateway
class PaymentGateway {
    processPayment(amount: number):string {
        return `Processed paymenr of $${amount}`;
    }
};

// Real inventory service

class InventoryService {
    checkStock(productId:string):boolean {
        return true
    }
};

export class OrderService {
    private paymentGateway: PaymentGateway;
    private inventoryService: InventoryService;
    constructor(
        paymentGateway: PaymentGateway,
        inventoryService: InventoryService
    ){
        this.paymentGateway = paymentGateway;
        this.inventoryService = inventoryService
    }
    checkout(amount:number, productId:string):string {
        if(!this.inventoryService.checkStock(productId)) {
            return  `Order failed: product out of stock`
        }
        const paymentResponse = this.paymentGateway.processPayment(amount);
        const bonusPoints = Math.floor(amount / 10);
        return `${paymentResponse} - Earned ${bonusPoints} bonus points`

    }
};