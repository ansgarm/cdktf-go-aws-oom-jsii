import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsKmsKeyConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html#grant_tokens DataAwsKmsKey#grant_tokens}.
     */
    readonly grantTokens?: string[];
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html#key_id DataAwsKmsKey#key_id}.
     */
    readonly keyId: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html aws_kms_key}.
 */
export declare class DataAwsKmsKey extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/kms_key.html aws_kms_key} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsKmsKeyConfig);
    get arn(): string;
    get awsAccountId(): string;
    get creationDate(): string;
    get customerMasterKeySpec(): string;
    get deletionDate(): string;
    get description(): string;
    get enabled(): boolean;
    get expirationModel(): string;
    private _grantTokens?;
    get grantTokens(): string[];
    set grantTokens(value: string[]);
    resetGrantTokens(): void;
    get grantTokensInput(): string[] | undefined;
    get id(): string;
    private _keyId;
    get keyId(): string;
    set keyId(value: string);
    get keyIdInput(): string;
    get keyManager(): string;
    get keyState(): string;
    get keyUsage(): string;
    get origin(): string;
    get validTo(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
