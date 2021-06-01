"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IamAccountPasswordPolicy = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const cdktf = require("cdktf");
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html aws_iam_account_password_policy}.
 */
class IamAccountPasswordPolicy extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/iam_account_password_policy.html aws_iam_account_password_policy} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope, id, config = {}) {
        super(scope, id, {
            terraformResourceType: 'aws_iam_account_password_policy',
            terraformGeneratorMetadata: {
                providerName: 'aws'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle
        });
        this._allowUsersToChangePassword = config.allowUsersToChangePassword;
        this._hardExpiry = config.hardExpiry;
        this._maxPasswordAge = config.maxPasswordAge;
        this._minimumPasswordLength = config.minimumPasswordLength;
        this._passwordReusePrevention = config.passwordReusePrevention;
        this._requireLowercaseCharacters = config.requireLowercaseCharacters;
        this._requireNumbers = config.requireNumbers;
        this._requireSymbols = config.requireSymbols;
        this._requireUppercaseCharacters = config.requireUppercaseCharacters;
    }
    get allowUsersToChangePassword() {
        return this.getBooleanAttribute('allow_users_to_change_password');
    }
    set allowUsersToChangePassword(value) {
        this._allowUsersToChangePassword = value;
    }
    resetAllowUsersToChangePassword() {
        this._allowUsersToChangePassword = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get allowUsersToChangePasswordInput() {
        return this._allowUsersToChangePassword;
    }
    // expire_passwords - computed: true, optional: false, required: false
    get expirePasswords() {
        return this.getBooleanAttribute('expire_passwords');
    }
    get hardExpiry() {
        return this.getBooleanAttribute('hard_expiry');
    }
    set hardExpiry(value) {
        this._hardExpiry = value;
    }
    resetHardExpiry() {
        this._hardExpiry = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get hardExpiryInput() {
        return this._hardExpiry;
    }
    // id - computed: true, optional: true, required: false
    get id() {
        return this.getStringAttribute('id');
    }
    get maxPasswordAge() {
        return this.getNumberAttribute('max_password_age');
    }
    set maxPasswordAge(value) {
        this._maxPasswordAge = value;
    }
    resetMaxPasswordAge() {
        this._maxPasswordAge = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get maxPasswordAgeInput() {
        return this._maxPasswordAge;
    }
    get minimumPasswordLength() {
        return this.getNumberAttribute('minimum_password_length');
    }
    set minimumPasswordLength(value) {
        this._minimumPasswordLength = value;
    }
    resetMinimumPasswordLength() {
        this._minimumPasswordLength = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get minimumPasswordLengthInput() {
        return this._minimumPasswordLength;
    }
    get passwordReusePrevention() {
        return this.getNumberAttribute('password_reuse_prevention');
    }
    set passwordReusePrevention(value) {
        this._passwordReusePrevention = value;
    }
    resetPasswordReusePrevention() {
        this._passwordReusePrevention = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get passwordReusePreventionInput() {
        return this._passwordReusePrevention;
    }
    get requireLowercaseCharacters() {
        return this.getBooleanAttribute('require_lowercase_characters');
    }
    set requireLowercaseCharacters(value) {
        this._requireLowercaseCharacters = value;
    }
    resetRequireLowercaseCharacters() {
        this._requireLowercaseCharacters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireLowercaseCharactersInput() {
        return this._requireLowercaseCharacters;
    }
    get requireNumbers() {
        return this.getBooleanAttribute('require_numbers');
    }
    set requireNumbers(value) {
        this._requireNumbers = value;
    }
    resetRequireNumbers() {
        this._requireNumbers = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireNumbersInput() {
        return this._requireNumbers;
    }
    get requireSymbols() {
        return this.getBooleanAttribute('require_symbols');
    }
    set requireSymbols(value) {
        this._requireSymbols = value;
    }
    resetRequireSymbols() {
        this._requireSymbols = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireSymbolsInput() {
        return this._requireSymbols;
    }
    get requireUppercaseCharacters() {
        return this.getBooleanAttribute('require_uppercase_characters');
    }
    set requireUppercaseCharacters(value) {
        this._requireUppercaseCharacters = value;
    }
    resetRequireUppercaseCharacters() {
        this._requireUppercaseCharacters = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get requireUppercaseCharactersInput() {
        return this._requireUppercaseCharacters;
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            allow_users_to_change_password: cdktf.booleanToTerraform(this._allowUsersToChangePassword),
            hard_expiry: cdktf.booleanToTerraform(this._hardExpiry),
            max_password_age: cdktf.numberToTerraform(this._maxPasswordAge),
            minimum_password_length: cdktf.numberToTerraform(this._minimumPasswordLength),
            password_reuse_prevention: cdktf.numberToTerraform(this._passwordReusePrevention),
            require_lowercase_characters: cdktf.booleanToTerraform(this._requireLowercaseCharacters),
            require_numbers: cdktf.booleanToTerraform(this._requireNumbers),
            require_symbols: cdktf.booleanToTerraform(this._requireSymbols),
            require_uppercase_characters: cdktf.booleanToTerraform(this._requireUppercaseCharacters),
        };
    }
}
exports.IamAccountPasswordPolicy = IamAccountPasswordPolicy;
_a = JSII_RTTI_SYMBOL_1;
IamAccountPasswordPolicy[_a] = { fqn: "hashicorp_aws.IamAccountPasswordPolicy", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWFtLWFjY291bnQtcGFzc3dvcmQtcG9saWN5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaWFtLWFjY291bnQtcGFzc3dvcmQtcG9saWN5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsK0JBQStCOzs7O0FBOEMvQixNQUFhLHdCQUF5QixTQUFRLEtBQUssQ0FBQyxpQkFBaUI7SUFFbkUsY0FBYztJQUNkLGNBQWM7SUFDZCxjQUFjOzs7Ozs7O0lBU2QsWUFBbUIsS0FBZ0IsRUFBRSxFQUFVLEVBQUUsU0FBeUMsRUFBRTtRQUMxRixLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRTtZQUNmLHFCQUFxQixFQUFFLGlDQUFpQztZQUN4RCwwQkFBMEIsRUFBRTtnQkFDMUIsWUFBWSxFQUFFLEtBQUs7YUFDcEI7WUFDRCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7WUFDekIsU0FBUyxFQUFFLE1BQU0sQ0FBQyxTQUFTO1lBQzNCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSztZQUNuQixTQUFTLEVBQUUsTUFBTSxDQUFDLFNBQVM7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLDJCQUEyQixHQUFHLE1BQU0sQ0FBQywwQkFBMEIsQ0FBQztRQUNyRSxJQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDO1FBQzdDLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMscUJBQXFCLENBQUM7UUFDM0QsSUFBSSxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztRQUMvRCxJQUFJLENBQUMsMkJBQTJCLEdBQUcsTUFBTSxDQUFDLDBCQUEwQixDQUFDO1FBQ3JFLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQztRQUM3QyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxjQUFj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RyxTQUFTLENBQUM7SUFDL0MsQ0FBQztJQUNELG9EQUFvRDtJQUNwRCxJQUFXLCtCQUErQjtRQUN4QyxPQUFPLElBQUksQ0FBQywyQkFBMkIsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBRUYsb0JBQW9CO1FBQzVCLE9BQU87WUFDTCw4QkFBOEIsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDO1lBQzFGLFdBQVcsRUFBRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN2RCxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUMvRCx1QkFBdUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDO1lBQzdFLHlCQUF5QixFQUFFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsd0JBQXdCLENBQUM7WUFDakYsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQztZQUN4RixlQUFlLEVBQUUsS0FBSyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUM7WUFDL0QsZUFBZSxFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDO1lBQy9ELDRCQUE0QixFQUFFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUM7U0FDekYsQ0FBQztJQUNKLENBQUM7O0FBak5ILDREQWtOQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vd3d3LnRlcnJhZm9ybS5pby9kb2NzL3Byb3ZpZGVycy9hd3Mvci9pYW1fYWNjb3VudF9wYXNzd29yZF9wb2xpY3kuaHRtbFxuLy8gZ2VuZXJhdGVkIGZyb20gdGVycmFmb3JtIHJlc291cmNlIHNjaGVtYVxuXG5pbXBvcnQgeyBDb25zdHJ1Y3QgfSBmcm9tICdjb25zdHJ1Y3RzJztcbmltcG9ydCAqIGFzIGNka3RmIGZyb20gJ2Nka3RmJztcblxuLy8gQ29uZmlndXJhdGlvblxuXG5leHBvcnQgaW50ZXJmYWNlIElhbUFjY291bnRQYXNzd29yZFBvbGljeUNvbmZpZyBleHRlbmRzIGNka3RmLlRlcnJhZm9ybU1ldGFBcmd1bWVudHMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IGFsbG93VXNlcnNUb0NoYW5nZVBhc3N3b3JkPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgaGFyZEV4cGlyeT86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSBtYXhQYXNzd29yZEFnZT86IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgbWluaW11bVBhc3N3b3JkTGVuZ3RoPzogbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcGFzc3dvcmRSZXVzZVByZXZlbnRpb24/OiBudW1iZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICByZWFkb25seSByZXF1aXJlTG93ZXJjYXNlQ2hhcmFjdGVycz86IGJvb2xlYW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgcmVhZG9ubHkgcmVxdWlyZU51bWJlcnM/OiBib29sZWFuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVpcmVTeW1ib2xzPzogYm9vbGVhbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHJlYWRvbmx5IHJlcXVpcmVVcHBlcmNhc2VDaGFyYWN0ZXJzPzogYm9vbGVhbjtcbn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbmV4cG9ydCBjbGFzcyBJYW1BY2NvdW50UGFzc3dvcmRQb2xpY3kgZXh0ZW5kcyBjZGt0Zi5UZXJyYWZvcm1SZXNvdXJjZSB7XG5cbiAgLy8gPT09PT09PT09PT1cbiAgLy8gSU5JVElBTElaRVJcbiAgLy8gPT09PT09PT09PT1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBwdWJsaWMgY29uc3RydWN0b3Ioc2NvcGU6IENvbnN0cnVjdCwgaWQ6IHN0cmluZywgY29uZmlnOiBJYW1BY2NvdW50UGFzc3dvcmRQb2xpY3lDb25maWcgPSB7fSkge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwge1xuICAgICAgdGVycmFmb3JtUmVzb3VyY2VUeXBlOiAnYXdzX2lhbV9hY2NvdW50X3Bhc3N3b3JkX3BvbGljeScsXG4gICAgICB0ZXJyYWZvcm1HZW5lcmF0b3JNZXRhZGF0YToge1xuICAgICAgICBwcm92aWRlck5hbWU6ICdhd3MnXG4gICAgICB9LFxuICAgICAgcHJvdmlkZXI6IGNvbmZpZy5wcm92aWRlcixcbiAgICAgIGRlcGVuZHNPbjogY29uZmlnLmRlcGVuZHNPbixcbiAgICAgIGNvdW50OiBjb25maWcuY291bnQsXG4gICAgICBsaWZlY3ljbGU6IGNvbmZpZy5saWZlY3ljbGVcbiAgICB9KTtcbiAgICB0aGlzLl9hbGxvd1VzZXJzVG9DaGFuZ2VQYXNzd29yZCA9IGNvbmZpZy5hbGxvd1VzZXJzVG9DaGFuZ2VQYXNzd29yZDtcbiAgICB0aGlzLl9oYXJkRXhwaXJ5ID0gY29uZmlnLmhhcmRFeHBpcnk7XG4gICAgdGhpcy5fbWF4UGFzc3dvcmRBZ2UgPSBjb25maWcubWF4UGFzc3dvcmRBZ2U7XG4gICAgdGhpcy5fbWluaW11bVBhc3N3b3JkTGVuZ3RoID0gY29uZmlnLm1pbmltdW1QYXNzd29yZExlbmd0aDtcbiAgICB0aGlzLl9wYXNzd29yZFJldXNlUHJldmVudGlvbiA9IGNvbmZpZy5wYXNzd29yZFJldXNlUHJldmVudGlvbjtcbiAgICB0aGlzLl9yZXF1aXJlTG93ZXJjYXNlQ2hhcmFjdGVycyA9IGNvbmZpZy5yZXF1aXJlTG93ZXJjYXNlQ2hhcmFjdGVycztcbiAgICB0aGlzLl9yZXF1aXJlTnVtYmVycyA9IGNvbmZpZy5yZXF1aXJlTnVtYmVycztcbiAgICB0aGlzLl9yZXF1aXJlU3ltYm9scyA9IGNvbmZpZy5yZXF1aXJlU3ltYm9scztcbiAgICB0aGlzLl9yZXF1aXJlVXBwZXJjYXNlQ2hhcmFjdGVycyA9IGNvbmZpZy5yZXF1aXJlVXBwZXJjYXNlQ2hhcmFjdGVycztcbiAgfVxuXG4gIC8vID09PT09PT09PT1cbiAgLy8gQVRUUklCVVRFU1xuICAvLyA9PT09PT09PT09XG5cbiAgLy8gYWxsb3dfdXNlcnNfdG9fY2hhbmdlX3Bhc3N3b3JkIC0gY29tcHV0ZWQ6IGZhbHNlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX2FsbG93VXNlcnNUb0NoYW5nZVBhc3N3b3JkPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCBhbGxvd1VzZXJzVG9DaGFuZ2VQYXNzd29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdhbGxvd191c2Vyc190b19jaGFuZ2VfcGFzc3dvcmQnKTtcbiAgfVxuICBwdWJsaWMgc2V0IGFsbG93VXNlcnNUb0NoYW5nZVBhc3N3b3JkKHZhbHVlOiBib29sZWFuICkge1xuICAgIHRoaXMuX2FsbG93VXNlcnNUb0NoYW5nZVBhc3N3b3JkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0QWxsb3dVc2Vyc1RvQ2hhbmdlUGFzc3dvcmQoKSB7XG4gICAgdGhpcy5fYWxsb3dVc2Vyc1RvQ2hhbmdlUGFzc3dvcmQgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGFsbG93VXNlcnNUb0NoYW5nZVBhc3N3b3JkSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93VXNlcnNUb0NoYW5nZVBhc3N3b3JkXG4gIH1cblxuICAvLyBleHBpcmVfcGFzc3dvcmRzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiBmYWxzZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHB1YmxpYyBnZXQgZXhwaXJlUGFzc3dvcmRzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ2V4cGlyZV9wYXNzd29yZHMnKTtcbiAgfVxuXG4gIC8vIGhhcmRfZXhwaXJ5IC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfaGFyZEV4cGlyeT86IGJvb2xlYW47XG4gIHB1YmxpYyBnZXQgaGFyZEV4cGlyeSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdoYXJkX2V4cGlyeScpO1xuICB9XG4gIHB1YmxpYyBzZXQgaGFyZEV4cGlyeSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hhcmRFeHBpcnkgPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRIYXJkRXhwaXJ5KCkge1xuICAgIHRoaXMuX2hhcmRFeHBpcnkgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IGhhcmRFeHBpcnlJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFyZEV4cGlyeVxuICB9XG5cbiAgLy8gaWQgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwdWJsaWMgZ2V0IGlkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFN0cmluZ0F0dHJpYnV0ZSgnaWQnKTtcbiAgfVxuXG4gIC8vIG1heF9wYXNzd29yZF9hZ2UgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9tYXhQYXNzd29yZEFnZT86IG51bWJlcjtcbiAgcHVibGljIGdldCBtYXhQYXNzd29yZEFnZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21heF9wYXNzd29yZF9hZ2UnKTtcbiAgfVxuICBwdWJsaWMgc2V0IG1heFBhc3N3b3JkQWdlKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9tYXhQYXNzd29yZEFnZSA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldE1heFBhc3N3b3JkQWdlKCkge1xuICAgIHRoaXMuX21heFBhc3N3b3JkQWdlID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtYXhQYXNzd29yZEFnZUlucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9tYXhQYXNzd29yZEFnZVxuICB9XG5cbiAgLy8gbWluaW11bV9wYXNzd29yZF9sZW5ndGggLSBjb21wdXRlZDogZmFsc2UsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfbWluaW11bVBhc3N3b3JkTGVuZ3RoPzogbnVtYmVyO1xuICBwdWJsaWMgZ2V0IG1pbmltdW1QYXNzd29yZExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5nZXROdW1iZXJBdHRyaWJ1dGUoJ21pbmltdW1fcGFzc3dvcmRfbGVuZ3RoJyk7XG4gIH1cbiAgcHVibGljIHNldCBtaW5pbXVtUGFzc3dvcmRMZW5ndGgodmFsdWU6IG51bWJlciApIHtcbiAgICB0aGlzLl9taW5pbXVtUGFzc3dvcmRMZW5ndGggPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRNaW5pbXVtUGFzc3dvcmRMZW5ndGgoKSB7XG4gICAgdGhpcy5fbWluaW11bVBhc3N3b3JkTGVuZ3RoID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCBtaW5pbXVtUGFzc3dvcmRMZW5ndGhJbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fbWluaW11bVBhc3N3b3JkTGVuZ3RoXG4gIH1cblxuICAvLyBwYXNzd29yZF9yZXVzZV9wcmV2ZW50aW9uIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcGFzc3dvcmRSZXVzZVByZXZlbnRpb24/OiBudW1iZXI7XG4gIHB1YmxpYyBnZXQgcGFzc3dvcmRSZXVzZVByZXZlbnRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TnVtYmVyQXR0cmlidXRlKCdwYXNzd29yZF9yZXVzZV9wcmV2ZW50aW9uJyk7XG4gIH1cbiAgcHVibGljIHNldCBwYXNzd29yZFJldXNlUHJldmVudGlvbih2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGFzc3dvcmRSZXVzZVByZXZlbnRpb24gPSB2YWx1ZTtcbiAgfVxuICBwdWJsaWMgcmVzZXRQYXNzd29yZFJldXNlUHJldmVudGlvbigpIHtcbiAgICB0aGlzLl9wYXNzd29yZFJldXNlUHJldmVudGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuICAvLyBUZW1wb3JhcmlseSBleHBvc2UgaW5wdXQgdmFsdWUuIFVzZSB3aXRoIGNhdXRpb24uXG4gIHB1YmxpYyBnZXQgcGFzc3dvcmRSZXVzZVByZXZlbnRpb25JbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc3dvcmRSZXVzZVByZXZlbnRpb25cbiAgfVxuXG4gIC8vIHJlcXVpcmVfbG93ZXJjYXNlX2NoYXJhY3RlcnMgLSBjb21wdXRlZDogdHJ1ZSwgb3B0aW9uYWw6IHRydWUsIHJlcXVpcmVkOiBmYWxzZVxuICBwcml2YXRlIF9yZXF1aXJlTG93ZXJjYXNlQ2hhcmFjdGVycz86IGJvb2xlYW47XG4gIHB1YmxpYyBnZXQgcmVxdWlyZUxvd2VyY2FzZUNoYXJhY3RlcnMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Qm9vbGVhbkF0dHJpYnV0ZSgncmVxdWlyZV9sb3dlcmNhc2VfY2hhcmFjdGVycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWlyZUxvd2VyY2FzZUNoYXJhY3RlcnModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlTG93ZXJjYXNlQ2hhcmFjdGVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcXVpcmVMb3dlcmNhc2VDaGFyYWN0ZXJzKCkge1xuICAgIHRoaXMuX3JlcXVpcmVMb3dlcmNhc2VDaGFyYWN0ZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1aXJlTG93ZXJjYXNlQ2hhcmFjdGVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlTG93ZXJjYXNlQ2hhcmFjdGVyc1xuICB9XG5cbiAgLy8gcmVxdWlyZV9udW1iZXJzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVxdWlyZU51bWJlcnM/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IHJlcXVpcmVOdW1iZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlcXVpcmVfbnVtYmVycycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWlyZU51bWJlcnModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlTnVtYmVycyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcXVpcmVOdW1iZXJzKCkge1xuICAgIHRoaXMuX3JlcXVpcmVOdW1iZXJzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1aXJlTnVtYmVyc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlTnVtYmVyc1xuICB9XG5cbiAgLy8gcmVxdWlyZV9zeW1ib2xzIC0gY29tcHV0ZWQ6IHRydWUsIG9wdGlvbmFsOiB0cnVlLCByZXF1aXJlZDogZmFsc2VcbiAgcHJpdmF0ZSBfcmVxdWlyZVN5bWJvbHM/OiBib29sZWFuO1xuICBwdWJsaWMgZ2V0IHJlcXVpcmVTeW1ib2xzKCkge1xuICAgIHJldHVybiB0aGlzLmdldEJvb2xlYW5BdHRyaWJ1dGUoJ3JlcXVpcmVfc3ltYm9scycpO1xuICB9XG4gIHB1YmxpYyBzZXQgcmVxdWlyZVN5bWJvbHModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9yZXF1aXJlU3ltYm9scyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyByZXNldFJlcXVpcmVTeW1ib2xzKCkge1xuICAgIHRoaXMuX3JlcXVpcmVTeW1ib2xzID0gdW5kZWZpbmVkO1xuICB9XG4gIC8vIFRlbXBvcmFyaWx5IGV4cG9zZSBpbnB1dCB2YWx1ZS4gVXNlIHdpdGggY2F1dGlvbi5cbiAgcHVibGljIGdldCByZXF1aXJlU3ltYm9sc0lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLl9yZXF1aXJlU3ltYm9sc1xuICB9XG5cbiAgLy8gcmVxdWlyZV91cHBlcmNhc2VfY2hhcmFjdGVycyAtIGNvbXB1dGVkOiB0cnVlLCBvcHRpb25hbDogdHJ1ZSwgcmVxdWlyZWQ6IGZhbHNlXG4gIHByaXZhdGUgX3JlcXVpcmVVcHBlcmNhc2VDaGFyYWN0ZXJzPzogYm9vbGVhbjtcbiAgcHVibGljIGdldCByZXF1aXJlVXBwZXJjYXNlQ2hhcmFjdGVycygpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRCb29sZWFuQXR0cmlidXRlKCdyZXF1aXJlX3VwcGVyY2FzZV9jaGFyYWN0ZXJzJyk7XG4gIH1cbiAgcHVibGljIHNldCByZXF1aXJlVXBwZXJjYXNlQ2hhcmFjdGVycyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3JlcXVpcmVVcHBlcmNhc2VDaGFyYWN0ZXJzID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIHJlc2V0UmVxdWlyZVVwcGVyY2FzZUNoYXJhY3RlcnMoKSB7XG4gICAgdGhpcy5fcmVxdWlyZVVwcGVyY2FzZUNoYXJhY3RlcnMgPSB1bmRlZmluZWQ7XG4gIH1cbiAgLy8gVGVtcG9yYXJpbHkgZXhwb3NlIGlucHV0IHZhbHVlLiBVc2Ugd2l0aCBjYXV0aW9uLlxuICBwdWJsaWMgZ2V0IHJlcXVpcmVVcHBlcmNhc2VDaGFyYWN0ZXJzSW5wdXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlcXVpcmVVcHBlcmNhc2VDaGFyYWN0ZXJzXG4gIH1cblxuICAvLyA9PT09PT09PT1cbiAgLy8gU1lOVEhFU0lTXG4gIC8vID09PT09PT09PVxuXG4gIHByb3RlY3RlZCBzeW50aGVzaXplQXR0cmlidXRlcygpOiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGFsbG93X3VzZXJzX3RvX2NoYW5nZV9wYXNzd29yZDogY2RrdGYuYm9vbGVhblRvVGVycmFmb3JtKHRoaXMuX2FsbG93VXNlcnNUb0NoYW5nZVBhc3N3b3JkKSxcbiAgICAgIGhhcmRfZXhwaXJ5OiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5faGFyZEV4cGlyeSksXG4gICAgICBtYXhfcGFzc3dvcmRfYWdlOiBjZGt0Zi5udW1iZXJUb1RlcnJhZm9ybSh0aGlzLl9tYXhQYXNzd29yZEFnZSksXG4gICAgICBtaW5pbXVtX3Bhc3N3b3JkX2xlbmd0aDogY2RrdGYubnVtYmVyVG9UZXJyYWZvcm0odGhpcy5fbWluaW11bVBhc3N3b3JkTGVuZ3RoKSxcbiAgICAgIHBhc3N3b3JkX3JldXNlX3ByZXZlbnRpb246IGNka3RmLm51bWJlclRvVGVycmFmb3JtKHRoaXMuX3Bhc3N3b3JkUmV1c2VQcmV2ZW50aW9uKSxcbiAgICAgIHJlcXVpcmVfbG93ZXJjYXNlX2NoYXJhY3RlcnM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9yZXF1aXJlTG93ZXJjYXNlQ2hhcmFjdGVycyksXG4gICAgICByZXF1aXJlX251bWJlcnM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9yZXF1aXJlTnVtYmVycyksXG4gICAgICByZXF1aXJlX3N5bWJvbHM6IGNka3RmLmJvb2xlYW5Ub1RlcnJhZm9ybSh0aGlzLl9yZXF1aXJlU3ltYm9scyksXG4gICAgICByZXF1aXJlX3VwcGVyY2FzZV9jaGFyYWN0ZXJzOiBjZGt0Zi5ib29sZWFuVG9UZXJyYWZvcm0odGhpcy5fcmVxdWlyZVVwcGVyY2FzZUNoYXJhY3RlcnMpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==