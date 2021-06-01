import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CognitoUserPoolUiCustomizationConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html#client_id CognitoUserPoolUiCustomization#client_id}.
     */
    readonly clientId?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html#css CognitoUserPoolUiCustomization#css}.
     */
    readonly css?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html#image_file CognitoUserPoolUiCustomization#image_file}.
     */
    readonly imageFile?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html#user_pool_id CognitoUserPoolUiCustomization#user_pool_id}.
     */
    readonly userPoolId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html aws_cognito_user_pool_ui_customization}.
 */
export declare class CognitoUserPoolUiCustomization extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_user_pool_ui_customization.html aws_cognito_user_pool_ui_customization} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CognitoUserPoolUiCustomizationConfig);
    private _clientId?;
    get clientId(): string;
    set clientId(value: string);
    resetClientId(): void;
    get clientIdInput(): string | undefined;
    get creationDate(): string;
    private _css?;
    get css(): string;
    set css(value: string);
    resetCss(): void;
    get cssInput(): string | undefined;
    get cssVersion(): string;
    get id(): string;
    private _imageFile?;
    get imageFile(): string;
    set imageFile(value: string);
    resetImageFile(): void;
    get imageFileInput(): string | undefined;
    get imageUrl(): string;
    get lastModifiedDate(): string;
    private _userPoolId;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
