import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsEcrAuthorizationTokenConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token.html#registry_id DataAwsEcrAuthorizationToken#registry_id}.
     */
    readonly registryId?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token.html aws_ecr_authorization_token}.
 */
export declare class DataAwsEcrAuthorizationToken extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/ecr_authorization_token.html aws_ecr_authorization_token} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config?: DataAwsEcrAuthorizationTokenConfig);
    get authorizationToken(): string;
    get expiresAt(): string;
    get id(): string;
    get password(): string;
    get proxyEndpoint(): string;
    private _registryId?;
    get registryId(): string;
    set registryId(value: string);
    resetRegistryId(): void;
    get registryIdInput(): string | undefined;
    get userName(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
