import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CognitoIdentityProviderConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html#attribute_mapping CognitoIdentityProvider#attribute_mapping}.
     */
    readonly attributeMapping?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html#idp_identifiers CognitoIdentityProvider#idp_identifiers}.
     */
    readonly idpIdentifiers?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html#provider_details CognitoIdentityProvider#provider_details}.
     */
    readonly providerDetails: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html#provider_name CognitoIdentityProvider#provider_name}.
     */
    readonly providerName: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html#provider_type CognitoIdentityProvider#provider_type}.
     */
    readonly providerType: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html#user_pool_id CognitoIdentityProvider#user_pool_id}.
     */
    readonly userPoolId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html aws_cognito_identity_provider}.
 */
export declare class CognitoIdentityProvider extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/cognito_identity_provider.html aws_cognito_identity_provider} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CognitoIdentityProviderConfig);
    private _attributeMapping?;
    get attributeMapping(): {
        [key: string]: string;
    };
    set attributeMapping(value: {
        [key: string]: string;
    });
    resetAttributeMapping(): void;
    get attributeMappingInput(): {
        [key: string]: string;
    } | undefined;
    get id(): string;
    private _idpIdentifiers?;
    get idpIdentifiers(): string[];
    set idpIdentifiers(value: string[]);
    resetIdpIdentifiers(): void;
    get idpIdentifiersInput(): string[] | undefined;
    private _providerDetails;
    get providerDetails(): {
        [key: string]: string;
    };
    set providerDetails(value: {
        [key: string]: string;
    });
    get providerDetailsInput(): {
        [key: string]: string;
    };
    private _providerName;
    get providerName(): string;
    set providerName(value: string);
    get providerNameInput(): string;
    private _providerType;
    get providerType(): string;
    set providerType(value: string);
    get providerTypeInput(): string;
    private _userPoolId;
    get userPoolId(): string;
    set userPoolId(value: string);
    get userPoolIdInput(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
