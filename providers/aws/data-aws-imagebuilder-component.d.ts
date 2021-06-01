import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface DataAwsImagebuilderComponentConfig extends cdktf.TerraformMetaArguments {
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_component.html#arn DataAwsImagebuilderComponent#arn}.
     */
    readonly arn: string;
    /**
     * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_component.html#tags DataAwsImagebuilderComponent#tags}.
     */
    readonly tags?: {
        [key: string]: string;
    };
}
/**
 * Represents a {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_component.html aws_imagebuilder_component}.
 */
export declare class DataAwsImagebuilderComponent extends cdktf.TerraformDataSource {
    /**
     * Create a new {@link https://www.terraform.io/docs/providers/aws/d/imagebuilder_component.html aws_imagebuilder_component} Data Source.
     *
     * @param scope The scope in which to define this construct.
     * @param id The scoped construct ID.
     */
    constructor(scope: Construct, id: string, config: DataAwsImagebuilderComponentConfig);
    private _arn;
    get arn(): string;
    set arn(value: string);
    get arnInput(): string;
    get changeDescription(): string;
    get data(): string;
    get dateCreated(): string;
    get description(): string;
    get encrypted(): boolean;
    get id(): string;
    get kmsKeyId(): string;
    get name(): string;
    get owner(): string;
    get platform(): string;
    get supportedOsVersions(): string[];
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
    get type(): string;
    get version(): string;
    protected synthesizeAttributes(): {
        [name: string]: any;
    };
}
