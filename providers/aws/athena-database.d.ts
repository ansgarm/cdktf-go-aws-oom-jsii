import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface AthenaDatabaseConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#bucket AthenaDatabase#bucket}.
     */
    readonly bucket: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#force_destroy AthenaDatabase#force_destroy}.
     */
    readonly forceDestroy?: boolean;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#name AthenaDatabase#name}.
     */
    readonly name: string;
    /**
     * encryption_configuration block.
     *
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#encryption_configuration AthenaDatabase#encryption_configuration}
     */
    readonly encryptionConfiguration?: AthenaDatabaseEncryptionConfiguration[];
}
export interface AthenaDatabaseEncryptionConfiguration {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#encryption_option AthenaDatabase#encryption_option}.
     */
    readonly encryptionOption: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html#kms_key AthenaDatabase#kms_key}.
     */
    readonly kmsKey?: string;
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html aws_athena_database}.
 */
export declare class AthenaDatabase extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/athena_database.html aws_athena_database} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: AthenaDatabaseConfig);
    private _bucket;
    get bucket(): string;
    set bucket(value: string);
    get bucketInput(): string;
    private _forceDestroy?;
    get forceDestroy(): boolean;
    set forceDestroy(value: boolean);
    resetForceDestroy(): void;
    get forceDestroyInput(): boolean | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _encryptionConfiguration?;
    get encryptionConfiguration(): AthenaDatabaseEncryptionConfiguration[];
    set encryptionConfiguration(value: AthenaDatabaseEncryptionConfiguration[]);
    resetEncryptionConfiguration(): void;
    get encryptionConfigurationInput(): AthenaDatabaseEncryptionConfiguration[] | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
