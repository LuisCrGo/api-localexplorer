"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationRestaurantGet = exports.ValidatorCreateReview = void 0;
const class_validator_1 = require("class-validator");
class ValidatorCreateReview {
    constructor(message, userId, restauratId) {
        this.message = message;
        this.userId = userId;
        this.restauratId = restauratId;
    }
}
exports.ValidatorCreateReview = ValidatorCreateReview;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 100),
    __metadata("design:type", String)
], ValidatorCreateReview.prototype, "message", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsUUID)(),
    __metadata("design:type", String)
], ValidatorCreateReview.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ValidatorCreateReview.prototype, "restauratId", void 0);
class ValidationRestaurantGet {
    constructor(restaurantId) {
        this.restaurantId = restaurantId;
    }
}
exports.ValidationRestaurantGet = ValidationRestaurantGet;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Number)
], ValidationRestaurantGet.prototype, "restaurantId", void 0);
//# sourceMappingURL=reviews.js.map