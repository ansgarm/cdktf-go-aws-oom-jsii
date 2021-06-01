import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsCodestarconnectionsConnectionConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection.html#arn DataAwsCodestarconnectionsConnection#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection.html#tags DataAwsCodestarconnectionsConnection#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection.html aws_codestarconnections_connection}.
 */
export declare class DataAwsCodestarconnectionsConnection extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/codestarconnections_connection.html aws_codestarconnections_connection} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsCodestarconnectionsConnectionConfig);
    private _arn;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get connectionStatus(): string;
    get hostArn(): string;
    get id(): string;
    get name(): string;
    get providerType(): string;
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
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
