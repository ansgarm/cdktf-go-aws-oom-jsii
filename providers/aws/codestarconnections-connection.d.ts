import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface CodestarconnectionsConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html#host_arn CodestarconnectionsConnection#host_arn}.
     */
    readonly hostArn?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html#name CodestarconnectionsConnection#name}.
     */
    readonly name: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html#provider_type CodestarconnectionsConnection#provider_type}.
     */
    readonly providerType?: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html#tags CodestarconnectionsConnection#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html#tags_all CodestarconnectionsConnection#tags_all}.
     */
    readonly tagsAll?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html aws_codestarconnections_connection}.
 */
export declare class CodestarconnectionsConnection extends cdktf.TerraformResource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/r/codestarconnections_connection.html aws_codestarconnections_connection} Resource.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: CodestarconnectionsConnectionConfig);
    get arn(): string;
    get connectionStatus(): string;
    private _hostArn?;
    get hostArn(): string;
    set hostArn(value: string);
    resetHostArn(): void;
    get hostArnInput(): string | undefined;
    get id(): string;
    private _name;
    get name(): string;
    set name(value: string);
    get nameInput(): string;
    private _providerType?;
    get providerType(): string;
    set providerType(value: string);
    resetProviderType(): void;
    get providerTypeInput(): string | undefined;
    private _tags?;
    get tags(): {
        [key: string]: string;
    };
    set tags(value: {
        [key: string]: string;
    });
    resetTags(): void;
    get tagsInput(): {
        [key: string]: string;
    } | undefined;
    private _tagsAll?;
    get tagsAll(): {
        [key: string]: string;
    };
    set tagsAll(value: {
        [key: string]: string;
    });
    resetTagsAll(): void;
    get tagsAllInput(): {
        [key: string]: string;
    } | undefined;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
